'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      spotify_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    name: {
        type: Sequelize.STRING,
        allowNull: false
        },
    href: {
         type: Sequelize.STRING,
         allowNull: false
      },
    external_url: {
        type: Sequelize.STRING,
        allowNull: false
     },
      followers_count: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    return queryInterface.dropTable('Artists');
  }
};