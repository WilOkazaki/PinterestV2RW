// Importar Sequelize y la conexión a la base de datos
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const { v4: uuidv4 } = require("uuid");
// Modelo de la tabla de imágenes
const ImagenFav = sequelize.define("ImagenFav", {
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
  description: {
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

// Sincronizar el modelo con la base de datos
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(
      "La tabla de imagenes favoritas se ha sincronizado con la base de datos"
    );
  })
  .catch((error) => {
    console.error(
      "Error al sincronizar la tabla de imagenes favoritas con la base de datos:",
      error
    );
  });
module.exports = ImagenFav;
