module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Postcomments',
      'Favorite_Tracks_By_An_Artist_PostId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Favorite_Tracks_By_An_Artist_Posts',
          key: 'id',
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Postcomments',
      'Favorite_Tracks_By_An_Artist_PostId',
      )
    }
};