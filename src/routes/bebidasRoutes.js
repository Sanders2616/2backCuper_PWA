// routes/bebidasRoutes.js
const express = require('express');
const router = express.Router();
const bebidasController = require('../controllers/bebidasController');

router.get('/', bebidasController.getBebidas);
router.get('/:id', bebidasController.getBebidaById);
router.post('/', bebidasController.createBebida);
router.put('/:id', bebidasController.updateBebida);
router.delete('/:id', bebidasController.deleteBebida);

module.exports = router;
