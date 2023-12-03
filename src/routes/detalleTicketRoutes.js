// routes/detalleTicketRoutes.js
const express = require('express');
const router = express.Router();
const detalleTicketController = require('../controllers/detalleTicketController');

router.get('/', detalleTicketController.getDetallesTicket);
router.get('/:id', detalleTicketController.getDetalleTicketById);
router.post('/', detalleTicketController.createDetalleTicket);
router.put('/:id', detalleTicketController.updateDetalleTicket);
router.delete('/:id', detalleTicketController.deleteDetalleTicket);

module.exports = router;
