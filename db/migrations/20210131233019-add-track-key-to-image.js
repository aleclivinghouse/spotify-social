module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Images',
      'trackId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Tracks",
          key: "id",
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Images',
      'trackId',
      )
    }
  };