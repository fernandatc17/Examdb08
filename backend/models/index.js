const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Cliente = require('./cliente.model')(sequelize, Sequelize);
db.Producto = require('./producto.model')(sequelize, Sequelize);

module.exports = db;
