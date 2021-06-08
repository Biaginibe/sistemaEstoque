const { Model, DataTypes } = require('sequelize');

class Product extends Model {
	static init(sequelize) {
		super.init({
            nomeProduto: DataTypes.STRING, 
            descricao: DataTypes.STRING, 
            quantidade: DataTypes.INTEGER, 
        }, {sequelize});
	}
}
            

module.exports = Product;
