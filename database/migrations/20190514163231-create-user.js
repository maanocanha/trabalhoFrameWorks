'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      CPF: {
        type: Sequelize.INTEGER
      },
      RG: {
        type: Sequelize.INTEGER
      },
      datanasc: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      id_destino: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Destinos',
          key: 'id'
        }
      },
      login: {
        type: Sequelize.STRING,
        unique: true
      },
      senha: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};