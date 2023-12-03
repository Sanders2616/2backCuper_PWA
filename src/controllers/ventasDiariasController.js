const { sequelize } = require('../models/mesaModel');

exports.obtenerVentasDiarias = async (req, res) => {
  try {
    const result = await sequelize.query('SELECT fecha, SUM(total_venta) AS total_diario FROM VentasDiarias GROUP BY fecha', { type: sequelize.QueryTypes.SELECT });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las ventas diarias' });
  }
};
