module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Commentlikes',
      'PostcommentId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Postcomments',
          key: 'id',
        }
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Commentlikes',
      'PostcommentId',
      )
    }
  };