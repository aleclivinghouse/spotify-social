'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Post_Favorite_Tags', {
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // Favorite_Tracks_By_An_Artist_PostId: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      // TagId: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Post_Favorite_Tags');
  }
};