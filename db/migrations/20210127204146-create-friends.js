'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('friends', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      friendOneId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      friendTwoId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('friends');
  }
};