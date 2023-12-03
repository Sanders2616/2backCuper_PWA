// controllers/mesasController.js
const  Mesa  = require('../models/mesaModel');
const sequelize = require('../config/databaseConfig');

exports.getMesas = async (req, res) => {
  try {
    const mesas = await Mesa.findAll();
    res.json(mesas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las mesas' });
  }
};

exports.getMesaById = async (req, res) => {
  const mesaId = req.params.id;

  try {
    const mesa = await Mesa.findByPk(mesaId);
    if (!mesa) {
      return res.status(404).json({ error: 'Mesa no encontrada' });
    }
    res.json(mesa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la mesa' });
  }
};

exports.createMesa = async (req, res) => {
  const { numero_mesa, id_mesero } = req.body;

  try {
    const mesa = await Mesa.create({ numero_mesa, id_mesero });
    res.json({ message: 'Mesa creada correctamente', mesa });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la mesa' });
  }
};

exports.updateMesa = async (req, res) => {
  const mesaId = req.params.id;
  const { numero_mesa, id_mesero } = req.body;

  try {
    const mesa = await Mesa.findByPk(mesaId);
    if (!mesa) {
      return res.status(404).json({ error: 'Mesa no encontrada' });
    }

    await mesa.update({ numero_mesa, id_mesero });
    res.json({ message: `Mesa con ID ${mesaId} actualizada correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la mesa' });
  }
};

exports.deleteMesa = async (req, res) => {
  const mesaId = req.params.id;

  try {
    const mesa = await Mesa.findByPk(mesaId);
    if (!mesa) {
      return res.status(404).json({ error: 'Mesa no encontrada' });
    }

    await mesa.destroy();
    res.json({ message: `Mesa con ID ${mesaId} eliminada correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la mesa' });
  }
};

exports.getTotalVentasMesa = async (req, res) => {
    const mesaId = req.params.id;
  
    try {
      const result = await sequelize.query(
        'SELECT SUM(total_venta) as total_ventas FROM VistaVentasDiarias WHERE numero_mesa = ?',
        {
          replacements: [mesaId],
          type: sequelize.QueryTypes.SELECT,
        }
      );
  
      const totalVentas = result[0].total_ventas || 0;
      res.json({ totalVentas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el total de ventas de la mesa' });
    }
};
