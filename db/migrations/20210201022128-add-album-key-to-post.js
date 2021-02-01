module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Posts',
      'albumId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Albums",
          key: "id"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Posts',
      'albumId',
      )
  }
};