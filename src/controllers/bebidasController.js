// controllers/bebidasController.js
const Bebida = require('../models/bebidaModel');

exports.getBebidas = async (req, res) => {
  try {
    const bebidas = await Bebida.findAll();
    res.json(bebidas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las bebidas' });
  }
};

exports.getBebidaById = async (req, res) => {
  const bebidaId = req.params.id;

  try {
    const bebida = await Bebida.findByPk(bebidaId);
    if (!bebida) {
      return res.status(404).json({ error: 'Bebida no encontrada' });
    }
    res.json(bebida);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la bebida' });
  }
};

exports.createBebida = async (req, res) => {
  const { nombre, precio } = req.body;

  try {
    const bebida = await Bebida.create({ nombre, precio });
    res.json({ message: 'Bebida creada correctamente', bebida });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la bebida' });
  }
};

exports.updateBebida = async (req, res) => {
  const bebidaId = req.params.id;
  const { nombre, precio } = req.body;

  try {
    const bebida = await Bebida.findByPk(bebidaId);
    if (!bebida) {
      return res.status(404).json({ error: 'Bebida no encontrada' });
    }

    await bebida.update({ nombre, precio });
    res.json({ message: `Bebida con ID ${bebidaId} actualizada correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la bebida' });
  }
};

exports.deleteBebida = async (req, res) => {
  const bebidaId = req.params.id;

  try {
    const bebida = await Bebida.findByPk(bebidaId);
    if (!bebida) {
      return res.status(404).json({ error: 'Bebida no encontrada' });
    }

    await bebida.destroy();
    res.json({ message: `Bebida con ID ${bebidaId} eliminada correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la bebida' });
  }
};
