module.exports = {
  up: (queryInterface, Sequelize) => {
    // Order belongsTo Customer
    return queryInterface.addColumn(
      'PostFavoriteTracks', // name of Source model
      'FavoriteTracksByAnArtistPostId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'FavoriteTracksByAnArtistPosts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'PostFavoriteTracks', // name of Source model
          'TrackId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Tracks', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    // remove Order belongsTo Customer
    return queryInterface.removeColumn(
      'PostFavoriteTracks', // name of Source model
      'FavoriteTracksByAnArtistPostId', // name of the key we're adding 
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'PostFavoriteTracks', // name of Source model
          'TrackId', // name of the key we're adding 
        );
      });
  }
};