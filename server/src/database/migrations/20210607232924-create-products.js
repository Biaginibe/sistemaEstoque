'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			nomeProduto: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			descricao: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			quantidade: {
				type: Sequelize.INTEGER,
				allowNull: false,
      },
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
