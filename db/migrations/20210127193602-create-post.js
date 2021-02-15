'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      feed_item: {
        type: Sequelize.STRING,
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};