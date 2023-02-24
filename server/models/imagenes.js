// Importar Sequelize y la conexión a la base de datos
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
// Modelo de la tabla de imágenes
const Image = sequelize.define("Image", {
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});
//Relacion de la tabla
/* Image.belongsTo(User); */
// Sincronizar el modelo con la base de datos
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
