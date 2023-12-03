// meseroModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const Mesero = sequelize.define('Mesero', {
  id_mesero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Desactivar la generación automática de createdAt y updatedAt
});

module.exports = Mesero;
