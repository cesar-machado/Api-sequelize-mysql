'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Inscricoes', { 
        id: { 
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        CursosId: { 
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Cursos', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        AlunosId: { 
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'Alunos', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'          
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }) 
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Inscricoes');
  }
};

// npx sequelize db:migrate