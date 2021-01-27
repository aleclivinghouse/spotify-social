'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
        },
        read: {
          type: DataTypes.BOOLEAN,
          allowNull: true
          },
        href: {
        type: DataTypes.STRING,
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
      userNotifiedId: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      userMentionedId: {
        type: Sequelize.INTEGER,
        foreignKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notifications');
  }
};