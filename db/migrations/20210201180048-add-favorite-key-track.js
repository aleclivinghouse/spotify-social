module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Tracks',
      'FavoriteTracksByAnArtistPostId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'FavoriteTracksByAnArtistPosts',
          key: 'id',
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Tracks',
      'FavoriteTracksByAnArtistPostId',
      )
    }
};