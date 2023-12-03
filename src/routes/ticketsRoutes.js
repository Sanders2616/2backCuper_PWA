// routes/ticketsRoutes.js
const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/ticketsController');

router.get('/', ticketsController.getTickets);
router.get('/:id', ticketsController.getTicketById);
router.post('/', ticketsController.createTicket);
router.put('/:id', ticketsController.updateTicket);
router.delete('/:id', ticketsController.deleteTicket);

module.exports = router;
