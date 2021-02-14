'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostFavoriteTracks', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // TrackId: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      // Favorite_Tracks_By_An_Artist_PostId: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PostFavoriteTracks');
  }
};