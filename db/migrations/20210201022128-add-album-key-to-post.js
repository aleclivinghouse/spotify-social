module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Posts',
      'AlbumId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Albums',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Posts',
      'AlbumId',
      )
  }
};