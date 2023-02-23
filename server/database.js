const mysql = require("mysql2/promise");

// Configuración de la conexión a la base de datos
const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "AdminUser",
  })
  .then((connection) => {
    // Nombre de la base de datos que quieres crear
    const databaseName = "my_database";

    // Consulta SQL para crear la base de datos si aún no existe
    const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;

    // Función que ejecuta la consulta SQL para crear la base de datos
    async function createDatabase() {
      try {
        await connection.query(createDatabaseQuery);
        console.log(`Base de datos '${databaseName}' creada exitosamente`);
      } catch (error) {
        console.error(
          `Error al crear la base de datos '${databaseName}':`,
          error
        );
      } finally {
        // Cierra la conexión a la base de datos
        await connection.end();
      }
    }

    // Ejecuta la función para crear la base de datos
    createDatabase();
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
module.exports = connection;
