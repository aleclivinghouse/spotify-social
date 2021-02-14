module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'FavoriteTracksByAnArtistPosts',
      'UserId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'FavoriteTracksByAnArtistPosts',
      'UserId',
      )
    }
};