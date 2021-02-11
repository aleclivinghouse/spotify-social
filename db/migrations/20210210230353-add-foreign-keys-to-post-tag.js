module.exports = {
  up: (queryInterface, Sequelize) => {
    // Order belongsTo Customer
    return queryInterface.addColumn(
      'Post_Tags', // name of Source model
      'PostId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'Post_Tags', // name of Source model
          'TagId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Tags', // name of Source model
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
      'Post_Tags', // name of Source model
      'PostId', // name of the key we're adding 
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Post_Tags', // name of Source model
          'TagId', // name of the key we're adding 
        );
      });
  }
};