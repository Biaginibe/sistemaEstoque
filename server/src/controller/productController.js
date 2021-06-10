const Product = require('../model/Product');
const { Op } = require('sequelize');

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
		const like = req.body.like;
		console.log(req.body.like);
		const product = await Product.findAll({
			where: {
				nomeProduto:{[Op.substring]: like,}
			},
		});
		return res.json(product);
	},
};
