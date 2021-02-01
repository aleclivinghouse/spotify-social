module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Images',
      'profileId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Profiles",
          key: "id",
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Images',
      'profileId',
      )
    }
  };