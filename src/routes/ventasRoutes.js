// routes/ventasRoutes.js
const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

// Ruta para manejar las ventas
router.post('/', ventasController.registrarVenta);

module.exports = router;