'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      artist_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      album_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      track_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      profile_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images');
  }
};