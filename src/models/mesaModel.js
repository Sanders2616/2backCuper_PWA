// models/mesaModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const Mesa = sequelize.define('Mesa', {
  id_mesa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  numero_mesa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_mesero: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  total_ventas: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
}, {
    timestamps: false,
});

module.exports = Mesa;
