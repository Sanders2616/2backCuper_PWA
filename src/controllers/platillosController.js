// controllers/platillosController.js
const Platillo = require('../models/platilloModel');

exports.getPlatillos = async (req, res) => {
  try {
    const platillos = await Platillo.findAll();
    res.json(platillos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los platillos' });
  }
};

exports.getPlatilloById = async (req, res) => {
  const platilloId = req.params.id;

  try {
    const platillo = await Platillo.findByPk(platilloId);
    if (!platillo) {
      return res.status(404).json({ error: 'Platillo no encontrado' });
    }
    res.json(platillo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el platillo' });
  }
};

exports.createPlatillo = async (req, res) => {
  const { nombre, precio } = req.body;

  try {
    const platillo = await Platillo.create({ nombre, precio });
    res.json({ message: 'Platillo creado correctamente', platillo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el platillo' });
  }
};

exports.updatePlatillo = async (req, res) => {
  const platilloId = req.params.id;
  const { nombre, precio } = req.body;

  try {
    const platillo = await Platillo.findByPk(platilloId);
    if (!platillo) {
      return res.status(404).json({ error: 'Platillo no encontrado' });
    }

    await platillo.update({ nombre, precio });
    res.json({ message: `Platillo con ID ${platilloId} actualizado correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el platillo' });
  }
};

exports.deletePlatillo = async (req, res) => {
  const platilloId = req.params.id;

  try {
    const platillo = await Platillo.findByPk(platilloId);
    if (!platillo) {
      return res.status(404).json({ error: 'Platillo no encontrado' });
    }

    await platillo.destroy();
    res.json({ message: `Platillo con ID ${platilloId} eliminado correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el platillo' });
  }
};
