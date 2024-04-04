// userController.js

const bcrypt = require("bcryptjs");
const db = require("../config/config-db.js");

exports.registerUser = (req, res) => {
    const { nombres, apellidos, email, telefono, contraseña } = req.body;

    // Hashea la contraseña antes de guardarla en la base de datos
    bcrypt.hash(contraseña, 10, (err, hashedContraseña) => {
        if (err) {
            console.error("Error al hashear la contraseña:", err);
            res.status(500).json({ error: "Error interno del servidor" });
        } else {
            // Inserta el nuevo usuario en la base de datos
            db.query(
                "INSERT INTO users (nombres, apellidos, email, telefono, contraseña) VALUES (?, ?, ?, ?, ?)",
                [nombres, apellidos, email, telefono, hashedContraseña],
                (err, result) => {
                    if (err) {
                        console.error(
                            "Error al registrar usuario en la base de datos:",
                            err
                        );
                        res.status(500).json({
                            error: "Error interno del servidor",
                        });
                    } else {
                        res.status(201).json({
                            message: "Usuario registrado exitosamente",
                        });
                    }
                }
            );
        }
    });
};
