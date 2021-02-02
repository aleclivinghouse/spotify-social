module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Posts',
      'TrackId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tracks',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Posts',
      'TrackId',
      )
  }
};