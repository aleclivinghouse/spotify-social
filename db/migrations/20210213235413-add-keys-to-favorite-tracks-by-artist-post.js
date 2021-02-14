module.exports = {
  up: (queryInterface, Sequelize) => {
    // Order belongsTo Customer

        // Payment hasOne Order
        return queryInterface.addColumn(
          'Reposts', // name of the key we're adding 
          'FavoriteTracksByAnArtistPostId', // name of Source model
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'FavoriteTracksByAnArtistPosts', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          })
  },

  down: (queryInterface, Sequelize) => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Reposts', // name of the key we're adding 
          'FavoriteTracksByAnArtistPostId', // name of Source model
        )
  }
};