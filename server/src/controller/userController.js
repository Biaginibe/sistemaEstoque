const User = require('../model/User');

module.exports = {
	async createUser(req, res) {
		const { cpf, perfil, senha } = req.body;
		const user = await User.create({
			cpf,
			perfil,
			senha,
		});

		return res.json(user);
	},
};
