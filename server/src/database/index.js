const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Product = require('../model/Product');
const User = require('../model/User');

const connection = new Sequelize(dbConfig);

Product.init(connection);
User.init(connection);

module.exports = connection;