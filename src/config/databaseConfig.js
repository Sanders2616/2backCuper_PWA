// src/config/databaseConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'sandra',
  password: '1234',
  database: 'back_cuper',
});

module.exports = sequelize;
