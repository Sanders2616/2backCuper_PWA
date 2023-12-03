// models/detalleTicketModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const DetalleTicket = sequelize.define('DetalleTicket', {
  id_detalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_ticket: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tickets',
      key: 'id_ticket',
    },
  },
  id_platillo: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Platillos',
      key: 'id_platillo',
    },
  },
  id_bebida: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Bebidas',
      key: 'id_bebida',
    },
  },
  cantidad: {
    type: DataTypes.INTEGER,
  },
  observaciones: {
    type: DataTypes.STRING,
  },
}, {
    tableName: 'DetalleTicket',
    timestamps: false,
});

module.exports = DetalleTicket;
