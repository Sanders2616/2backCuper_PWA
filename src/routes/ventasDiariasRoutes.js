const express = require('express');
const router = express.Router();
const ventasDiariasController = require('../controllers/ventasDiariasController');

// Ruta para obtener las ventas diarias
router.get('/', ventasDiariasController.obtenerVentasDiarias);

module.exports = router;
