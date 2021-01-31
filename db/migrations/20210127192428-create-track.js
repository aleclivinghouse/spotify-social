'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
      },
      album_id: {
        type: Sequelize.STRING,
        foreignKey: true
      },
      post_id: {
        type: Sequelize.STRING,
        foreignKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tracks');
  }
};
