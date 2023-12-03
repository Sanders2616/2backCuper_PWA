// meseroController.js
const Mesero = require('../models/meseroModel');

exports.getMeseros = async (req, res) => {
  try {
    const meseros = await Mesero.findAll();
    res.json(meseros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los meseros' });
  }
};
