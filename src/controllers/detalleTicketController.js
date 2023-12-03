// controllers/detalleTicketController.js
const DetalleTicket = require('../models/detalleTicketModel');

exports.getDetallesTicket = async (req, res) => {
  try {
    const detallesTicket = await DetalleTicket.findAll();
    res.json(detallesTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los detalles del ticket' });
  }
};

exports.getDetalleTicketById = async (req, res) => {
  const detalleId = req.params.id;

  try {
    const detalleTicket = await DetalleTicket.findByPk(detalleId);
    if (!detalleTicket) {
      return res.status(404).json({ error: 'Detalle del ticket no encontrado' });
    }
    res.json(detalleTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el detalle del ticket' });
  }
};

exports.createDetalleTicket = async (req, res) => {
  const { id_ticket, id_platillo, id_bebida, cantidad, observaciones } = req.body;

  try {
    const detalleTicket = await DetalleTicket.create({ id_ticket, id_platillo, id_bebida, cantidad, observaciones });
    res.json({ message: 'Detalle del ticket creado correctamente', detalleTicket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el detalle del ticket' });
  }
};

exports.updateDetalleTicket = async (req, res) => {
  const detalleId = req.params.id;
  const { id_ticket, id_platillo, id_bebida, cantidad, observaciones } = req.body;

  try {
    const detalleTicket = await DetalleTicket.findByPk(detalleId);
    if (!detalleTicket) {
      return res.status(404).json({ error: 'Detalle del ticket no encontrado' });
    }

    await detalleTicket.update({ id_ticket, id_platillo, id_bebida, cantidad, observaciones });
    res.json({ message: `Detalle del ticket con ID ${detalleId} actualizado correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el detalle del ticket' });
  }
};

exports.deleteDetalleTicket = async (req, res) => {
  const detalleId = req.params.id;

  try {
    const detalleTicket = await DetalleTicket.findByPk(detalleId);
    if (!detalleTicket) {
      return res.status(404).json({ error: 'Detalle del ticket no encontrado' });
    }

    await detalleTicket.destroy();
    res.json({ message: `Detalle del ticket con ID ${detalleId} eliminado correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el detalle del ticket' });
  }
};
