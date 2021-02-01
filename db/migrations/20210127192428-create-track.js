'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      track_number: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Tracks');
  }
};
