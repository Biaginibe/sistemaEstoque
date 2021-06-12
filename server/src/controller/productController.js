const Product = require('../model/Product');
const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');

module.exports = {
	async createProduct(req, res) {
		const { nomeProduto, descricao, quantidade } = req.body;
		console.log(nomeProduto, descricao, quantidade)
		const product = await Product.create({
			nomeProduto,
			descricao,
			quantidade,
		});

		return res.json(product);
	},
	async findAllProducts(req, res) {
		const product = await Product.findAll();
		return res.json(product);
	},
	async findProductsLike(req, res) {
		const {like} = req.body;
		const product = await Product.sequelize.query(
			`SELECT * FROM products as product WHERE product.nomeProduto LIKE '%${like}%'`
		  );

		return res.json(product);
	},
};

