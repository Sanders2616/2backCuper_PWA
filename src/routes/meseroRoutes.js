// src/routes/meseroRoutes.js
const express = require('express');
const router = express.Router();
const meseroController = require('../controllers/meseroController');

router.get('/', meseroController.getMeseros);

// Puedes agregar más rutas según tus necesidades

module.exports = router;
