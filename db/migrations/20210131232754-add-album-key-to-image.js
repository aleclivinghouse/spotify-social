module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Images',
      'albumId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Albums",
          key: "id",
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Images',
      'albumId',
      )
    }
  };