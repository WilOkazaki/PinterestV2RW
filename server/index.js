//Requerimiento de Express y Middlewares
const express = require("express");
const morgan = require("morgan");
/* const path = require("path"); */
const cors = require("cors");
const sharp = require("sharp");
const router = require("./Routes/routes");

//Inicio de Exprees
const app = express();

//Conexion a la base de datos
const { sequelize } = require("./database");

//Settings
app.set("port", process.env.PORT || 3030);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Requerimiento y uso de Rutas
app.use(router);

//Servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor activo en : ${app.get("port")}`);
});
