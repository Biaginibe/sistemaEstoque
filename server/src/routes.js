const express = require('express');
const productController = require('./controller/productController');
const userController = require('./controller/userController');
const routes = express.Router();

routes.post('/user/stock/createProduct', productController.createProduct);
routes.post('/user/stock/createUser', userController.createUser);
routes.get('/user/stock', productController.findAllProducts);
routes.post('/user/stock/findLike', productController.findProductsLike);

module.exports = routes;
