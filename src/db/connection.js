// src/db/connection.js
const { Sequelize } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const db = {
  connect: async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error al conectar con la base de datos:', error);
    }
  },
};

module.exports = db;
