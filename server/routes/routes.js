//Requerimientos
const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const User = require("../models/user");
const Image = require("../models/imagenes");
const ImagenFav = require("../models/imagenFav");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
//Constantes
const secretKey = uuidv4();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Good");
});
router.get("/usuarios", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
//Funciones

//Registro de usuarios
router.post("/usuarios", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
});

//Logins
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ message: "Usuario no encontrado" });
  }
  if (user.password !== password) {
    return res.status(401).json({ message: "Contraseña incorrecta" });
  } else {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
    return res.json({ token, message: "Inicio de sesion exitoso" });
  }
});

//Manejador de imagenes
//Configuracion
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./dataBase/original");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage });
const helperImg = (filePath, fileName, size = 300) => {
  const optimizePath = path.join(__dirname, "..", "dataBase", "optimize");
  if (!fs.existsSync(optimizePath)) {
    fs.mkdirSync(optimizePath);
  }
  const optimizeFile = path.join(optimizePath, fileName);
  return sharp(filePath).resize(size, size).toFile(optimizeFile);
};
// Servir carpeta pública para las imágenes optimizadas
router.use(
  "/public",
  express.static(path.join(__dirname, "..", "dataBase", "optimize"))
);
//RUTAS
//Crea imagen
router.post("/upload", upload.single("file"), (req, res) => {
  const filePath = path.resolve(req.file.path);
  const { titulo } = req.body;
  const optimizePath = path.join(__dirname, "..", "dataBase", "optimize");
  const fileNameOptimize = `resize-${req.file.filename}`;
  helperImg(filePath, fileNameOptimize, 1000).then(() => {
    const image = {
      filename: req.file.filename,
      titulo,
      path: `/public/${fileNameOptimize}`, // Almacenar URL pública en path
    };
    Image.create(image)
      .then(() => {
        res.send({ data: "imagen cargada" });
      })
      .catch((error) => {
        console.error("Error al guardar en la base de datos: " + error);
        res
          .status(500)
          .send({ error: "Error al guardar la imagen en la base de datos" });
      });
  });
});
//Consulta imagenes
router.get("/images", async (req, res) => {
  const photos = await Image.findAll();
  res.json(photos);
});
//Crea favoritas
router.post("/Favorite/:id", (req, res) => {
  const i = req.params.id;
  //Busqueda
  Image.findOne({ where: { _id: i } })
    .then((image) => {
      if (image) {
        //Creamos una instancia para la imagen favorita
        ImagenFav.create({
          filename: image.filename,
          titulo: image.titulo,
          path: image.path,
        })
          .then(() => {
            res.send({ message: "Imagen agregada a favoritos" });
          })
          .catch((error) => {
            console.error(
              "Error al guardar la imagen en la tabla ImagenFav:",
              error
            );
            res
              .status(500)
              .send({ error: "Error al agregar la imagen a favoritos" });
          });
      } else {
        res.status(404).send({ error: "Imagen no encontrada" });
      }
    })
    .catch((error) => {
      console.error("Error al buscar la imagen en la tabla Image:", error);
      res
        .status(500)
        .send({ error: "Error al buscar la imagen en la base de datos" });
    });
});
//Consulta favoritos
router.get("/imgFav", async (req, res) => {
  const photosF = await ImagenFav.findAll();
  res.json(photosF);
});
//Elimina favoritos
router.delete("/Favorite/:id", (req, res) => {
  const i = req.params.id;
  //Eliminación
  ImagenFav.destroy({ where: { _id: i } })
    .then((rowsDeleted) => {
      if (rowsDeleted === 1) {
        res.send({ message: "Imagen eliminada de favoritos" });
      } else {
        res.status(404).send({ error: "Imagen no encontrada" });
      }
    })
    .catch((error) => {
      console.error(
        "Error al eliminar la imagen de la tabla ImagenFav:",
        error
      );
      res
        .status(500)
        .send({ error: "Error al eliminar la imagen de la tabla ImagenFav" });
    });
});

module.exports = router;
