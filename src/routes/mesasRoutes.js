// routes/mesasRoutes.js
const express = require('express');
const router = express.Router();
const mesasController = require('../controllers/mesasController');

// Obtener todas las mesas
router.get('/', mesasController.getMesas);

// Obtener una mesa por ID
router.get('/:id', mesasController.getMesaById);

// Crear una nueva mesa
router.post('/', mesasController.createMesa);

// Actualizar una mesa por ID
router.put('/:id', mesasController.updateMesa);

// Eliminar una mesa por ID
router.delete('/:id', mesasController.deleteMesa);

// Obtener el total de ventas de una mesa por ID
router.get('/:id/total-ventas', mesasController.getTotalVentasMesa);

module.exports = router;
