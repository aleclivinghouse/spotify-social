'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      album_type: {
        type:Sequelize.STRING,
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
      release_date: {
        type: Sequelize.STRING,
        allowNull: true
      },
      popularity: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    return queryInterface.dropTable('Albums');
  }
};