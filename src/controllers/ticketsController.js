// controllers/ticketsController.js
const Ticket = require('../models/ticketModel');

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los tickets' });
  }
};

exports.getTicketById = async (req, res) => {
  const ticketId = req.params.id;

  try {
    const ticket = await Ticket.findByPk(ticketId);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket no encontrado' });
    }
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el ticket' });
  }
};

exports.createTicket = async (req, res) => {
  const { id_mesa } = req.body;

  try {
    const ticket = await Ticket.create({ id_mesa });
    res.json({ message: 'Ticket creado correctamente', ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el ticket' });
  }
};

exports.updateTicket = async (req, res) => {
  const ticketId = req.params.id;
  const { id_mesa, confirmado } = req.body;

  try {
    const ticket = await Ticket.findByPk(ticketId);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket no encontrado' });
    }

    await ticket.update({ id_mesa, confirmado });
    res.json({ message: `Ticket con ID ${ticketId} actualizado correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el ticket' });
  }
};

exports.deleteTicket = async (req, res) => {
  const ticketId = req.params.id;

  try {
    const ticket = await Ticket.findByPk(ticketId);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket no encontrado' });
    }

    await ticket.destroy();
    res.json({ message: `Ticket con ID ${ticketId} eliminado correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el ticket' });
  }
};
