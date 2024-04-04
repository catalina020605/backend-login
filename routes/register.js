// routes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/register-controller");

// Ruta para el registro de usuarios
router.post("/register", userController.registerUser);

module.exports = router;
