module.exports = {
up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn(
    'Notifications',
    'user_notifiedId',
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      }
    }
  )
},

down: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn(
    'Notifications',
    'user_notifiedId',
    )
  }
};