module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'profileId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Profiles",
          key: "id"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'profileId',
      )
  }
};