'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('artists', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      followersCount: {
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
    return queryInterface.dropTable('artists');
  }
};