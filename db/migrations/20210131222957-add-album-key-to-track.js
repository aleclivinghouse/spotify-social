module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Tracks',
      'AlbumId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Albums',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Tracks',
      'AlbumId',
      )
  }
};