module.exports = {
  up: (queryInterface, Sequelize) => {
    // Order belongsTo Customer
    return queryInterface.addColumn(
      'Track_Genres', // name of Source model
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
    )
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'Track_Genres', // name of Source model
          'GenreId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Genres', // name of Source model
              key: 'id',
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
      'Track_Genres', // name of Source model
      'TrackId', // name of the key we're adding 
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Track_Genres', // name of Source model
          'GenreId', // name of the key we're adding 
        );
      });
  }
};