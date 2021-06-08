const express = require('express');
const productController = require('./controller/productController');
const routes = express.Router();

routes.post('/user/stock/createProduct', productController.createProduct);
routes.get('/user/stock', productController.findAllProducts);
routes.post('/user/stock/findLike', productController.findProductsLike);

module.exports = routes;
