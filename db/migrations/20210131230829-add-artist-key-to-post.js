module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Posts',
      'artistId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Artists",
          key: "id"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Posts',
      'artistId',
      )
  }
};