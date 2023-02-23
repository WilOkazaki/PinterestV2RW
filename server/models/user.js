// Importar Sequelize y la conexión a la base de datos
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

// Modelo de la tabla de usuarios
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definir la relación entre las tablas
User.hasMany(Image);

// Exportar los modelos
module.exports = User;
