'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lyric_annotation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      would_recommend: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      rating: {
        type: Sequelize.DECIMAL(10, 1),
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
      artistId: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      albumId: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};