module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Messages',
      'userId',
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
      'Messages',
      'userId',
      )
    }
  };