// models/platilloModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const Platillo = sequelize.define('Platillo', {
  id_platillo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
    timestamps: false,
});

module.exports = Platillo;
