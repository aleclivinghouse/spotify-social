module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Messages',
      'pm_threadId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Pmthreads",
          key: "id",
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Messages',
      'pm_threadId',
      )
    }
  };