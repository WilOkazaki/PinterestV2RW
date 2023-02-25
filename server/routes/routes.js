//Requerimientos
const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const User = require("../models/user");
const Image = require("../models/imagenes");
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
/* //Logout
router.post("/logout", (req, res) => {
  // Eliminar el token de la sesión
  req.session.token = null;
  // Devolver una respuesta al cliente
  res.json({ message: "Sesión cerrada exitosamente" });
}); */

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
  return sharp(filePath).resize(size).toFile(optimizeFile);
};
//RUTAS
router.post("/upload", upload.single("file"), (req, res) => {
  const filePath = path.resolve(req.file.path);
  console.log(filePath, req.file.filename);
  helperImg(filePath, `resize-${req.file.filename}`, 300);
  res.send({ data: "imagen cargada" });
});
module.exports = router;
