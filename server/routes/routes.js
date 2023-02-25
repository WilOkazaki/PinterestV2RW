const express = require("express");
const User = require("../models/user");
const Image = require("../models/imagenes");

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
    return res.json({ message: "Inicio de sesion exitoso" });
  }
});

module.exports = router;
