module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Postcomments',
      'postId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Posts",
          key: "id"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Postcomments',
      'postId',
      )
  }
};