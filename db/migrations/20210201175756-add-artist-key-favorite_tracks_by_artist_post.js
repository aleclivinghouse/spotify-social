module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Favorite_Tracks_By_An_Artist_Posts',
      'ArtistId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Artists',
          key: 'id',
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Favorite_Tracks_By_An_Artist_Posts',
      'ArtistId',
      )
    }
};