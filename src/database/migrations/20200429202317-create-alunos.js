'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Alunos', { 
        id: { 
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: { 
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: { 
            type: Sequelize.STRING,
            allowNull: false,
        },
        celular: {
          type: Sequelize.STRING,
          allowNull: false
        },
        genero: {
          type: Sequelize.STRING,
          allowNull: false
        },
        rg: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false
        },
        endereco: {
          type: Sequelize.STRING,
          allowNull: false
        },
        numero: {
          type: Sequelize.STRING,
          allowNull: false
        },
        complemento: {
          type: Sequelize.STRING,
          allowNull: false
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false
        },
        escolaridade: {
          type: Sequelize.STRING,
          allowNull: false
        },
        curso: {
          type: Sequelize.STRING,
          allowNull: false
        },
        obs: {
          type: Sequelize.STRING,
          allowNull: true
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Alunos');
  }
};

// npx sequelize db:migrate