'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Favorite_Tracks_By_An_Artist_Post', {
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   PostId: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true
    //   },
    //   TrackId: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true
    //   }
    });
  },
  down: (queryInterface, Sequelize) => {
     return queryInterface.dropTable('Favorite_Tracks_By_An_Artist_Post');
  }
};