const { Sequelize } = require("sequelize");

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize("my_database", "root", "AdminUser", {
  host: "localhost",
  dialect: "mysql",
});

// Función que ejecuta la consulta SQL para crear la base de datos si aún no existe
async function createDatabase() {
  try {
    await sequelize.query("CREATE DATABASE IF NOT EXISTS my_database");
    console.log("Base de datos 'my_database' creada exitosamente");
  } catch (error) {
    console.error("Error al crear la base de datos 'my_database':", error);
  } finally {
    // Cierra la conexión a la base de datos
    await sequelize.close();
  }
}

// Ejecuta la función para crear la base de datos
createDatabase();

module.exports = sequelize;
