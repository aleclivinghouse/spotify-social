module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Images',
      'ProfileId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Profiles',
          key: 'id',
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Images',
      'ProfileId',
      )
    }
  };