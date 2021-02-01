module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Commentlikes',
      'postcommentId',
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
      'postcommentId',
      )
    }
  };