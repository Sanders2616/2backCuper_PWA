// routes/platillosRoutes.js
const express = require('express');
const router = express.Router();
const platillosController = require('../controllers/platillosController');

router.get('/', platillosController.getPlatillos);
router.get('/:id', platillosController.getPlatilloById);
router.post('/', platillosController.createPlatillo);
router.put('/:id', platillosController.updatePlatillo);
router.delete('/:id', platillosController.deletePlatillo);

module.exports = router;
