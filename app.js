// app.js

const express = require("express");
const app = express();
const routes = require("./routes/register.js");

// Middleware para analizar cuerpos de solicitudes en formato JSON
app.use(express.json());

// Configura las rutas
app.use("/api", routes);

// Define el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
