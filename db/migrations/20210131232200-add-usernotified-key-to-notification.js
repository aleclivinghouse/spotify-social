module.exports = {
up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn(
    'Notifications',
    'UserId',
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id',
      }
    }
  )
},

down: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn(
    'Notifications',
    'UserId',
    )
  }
};