// Importar Sequelize y la conexión a la base de datos
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
// Modelo de la tabla de usuarios
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definir la relación entre las tablas
/* User.hasMany(Image); */

// Sincronizar el modelo con la base de datos
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("La tabla de usuarios se ha sincronizado con la base de datos");
  })
  .catch((error) => {
    console.error(
      "Error al sincronizar la tabla de usuarios con la base de datos:",
      error
    );
  });

// Exportar los modelos
module.exports = User;
