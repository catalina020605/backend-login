// database.js

const mysql = require("mysql2");

// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pruebaLogin",
});

// Conecta a la base de datos MySQL
db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos MySQL:", err);
    } else {
        console.log("Conexión exitosa a la base de datos MySQL");
    }
});

module.exports = db;
