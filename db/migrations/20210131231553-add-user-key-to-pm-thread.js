module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Pmthreads',
      'moderatorId',
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
      'Pmthreads',
      'moderatorId',
      )
  }
};