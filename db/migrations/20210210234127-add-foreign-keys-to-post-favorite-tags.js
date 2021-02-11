module.exports = {
  up: (queryInterface, Sequelize) => {
    // Order belongsTo Customer
    return queryInterface.addColumn(
      'Post_Favorite_Tags', // name of Source model
      'Favorite_Tracks_By_An_Artist_PostId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Favorite_Tracks_By_An_Artist_Posts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'Post_Favorite_Tags', // name of Source model
          'TagId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Tags', // name of Target model
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
      'Post_Favorite_Tags', // name of Source model
      'Favorite_Tracks_By_An_Artist_PostId', // name of the key we're adding 
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Post_Favorite_Tags', // name of Source model
          'TagId', // name of the key we're adding 
        );
      });
  }
};