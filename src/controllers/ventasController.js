const Ticket = require('../models/ticketModel');
const DetalleTicket = require('../models/detalleTicketModel');
const Platillo = require('../models/platilloModel');
const Bebida = require('../models/bebidaModel');
const sequelize = require('../config/databaseConfig');

exports.registrarVenta = async (req, res) => {
  const { mesaId, platilloId, bebidaId, cantidadPlatillo, cantidadBebida, observacionesPlatillo } = req.body;

  try {
    // Insertar un nuevo ticket con confirmado en false
    await sequelize.sync();
    const ticket = await Ticket.create({ id_mesa: mesaId, confirmado: false });
    const ticketId = ticket.id_ticket;

    // Insertar detalles del ticket para el platillo con observaciones
    await DetalleTicket.create({
      id_ticket: ticketId,
      id_platillo: platilloId,
      cantidad: cantidadPlatillo,
      observaciones: observacionesPlatillo,
    });

    // Insertar detalles del ticket para la bebida
    await DetalleTicket.create({
      id_ticket: ticketId,
      id_bebida: bebidaId,
      cantidad: cantidadBebida,
    });

    // Actualizar el ticket para establecer confirmado en true
    await ticket.update({ confirmado: true });

    res.json({ message: 'Venta registrada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar la venta' });
  }
};
