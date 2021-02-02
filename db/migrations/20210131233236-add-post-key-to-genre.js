module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Genres',
      'PostId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Posts',
          key: 'id',
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Genres',
      'PostId',
      )
    }
  };