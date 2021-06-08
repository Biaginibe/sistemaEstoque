const { Model, DataTypes } = require('sequelize');

class User extends Model {
	static init(sequelize) {
		super.init({
            cpf: DataTypes.STRING, 
            perfil: DataTypes.STRING, 
            senha: DataTypes.STRING, 
        }, {sequelize});
	}
}
            

module.exports = User;
