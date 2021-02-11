module.exports = {
  up: (queryInterface, Sequelize) => {
    // Order belongsTo Customer
    return queryInterface.addColumn(
      'Follows', // name of Source model
      'followerId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          as: 'follower',
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'Follows', // name of Source model
          'being_followedId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Target model
              as: 'being_followed',
              key: 'id', // key in Target model that we're referencing
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
      'Follows', // name of Source model
      'followerId', // name of the key we're adding 
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Follows', // name of Source model
          'being_followedId', // name of the key we're adding 
        );
      });
  }
};