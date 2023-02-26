// Importar Sequelize y la conexión a la base de datos
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const { v4: uuidv4 } = require("uuid");
// Modelo de la tabla de imágenes
const Image = sequelize.define("Image", {
  _id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("La tabla de imagenes se ha sincronizado con la base de datos");
  })
  .catch((error) => {
    console.error(
      "Error al sincronizar la tabla de imagenes con la base de datos:",
      error
    );
  });
module.exports = Image;
