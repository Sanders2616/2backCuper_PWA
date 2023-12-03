// models/ticketModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const Ticket = sequelize.define('Ticket', {
  id_ticket: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_mesa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Mesas',
      key: 'id_mesa',
    },
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  confirmado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: false,
});

module.exports = Ticket;
