'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      track_number: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      href: {
        type: DataTypes.STRING,
        allowNull: false
      },
      external_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      releaseDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      Popularity: {
        type: DataTypes.INTEGER,
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
      albumId: {
        type: Sequelize.STRING,
        foreignKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tracks');
  }
};
