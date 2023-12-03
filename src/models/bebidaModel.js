// models/bebidaModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const Bebida = sequelize.define('Bebida', {
  id_bebida: {
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

module.exports = Bebida;
