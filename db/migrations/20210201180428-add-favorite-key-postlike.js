module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Postlikes',
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
      'Postlikes',
      'FavoriteTracksByAnArtistPostId',
      )
    }
};