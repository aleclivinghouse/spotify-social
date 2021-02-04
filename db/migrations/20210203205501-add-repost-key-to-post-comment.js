module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Postcomments',
      'RepostId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Reposts',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Postcomments',
      'RepostId',
      )
  }
};