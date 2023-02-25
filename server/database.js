const { Sequelize } = require("sequelize");

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize("my_database", "root", "AdminUser", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
//nombre de la base de datos
const databaseName = "my_database";

const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
// Función que ejecuta la consulta SQL para crear la base de datos si aún no existe
async function createDatabase() {
  try {
    await sequelize.query(createDatabaseQuery);
    console.log(`Base de datos '${databaseName}' creada exitosamente`);
  } catch (error) {
    console.error(`Error al crear la base de datos '${databaseName}':`, error);
  } finally {
    // Cierra la conexión a la base de datos
    /* await sequelize.close(); */
  }
}
// Ejecuta la función para crear la base de datos
createDatabase();

module.exports = sequelize;
