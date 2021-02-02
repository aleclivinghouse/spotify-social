module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Images',
      'ArtistId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Artists',
          key: 'id',
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Images',
      'ArtistId',
      )
    }
  };