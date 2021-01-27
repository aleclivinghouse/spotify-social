'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('albums', {
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
      album_type: {
        type:DataTypes.STRING,
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('albums');
  }
};