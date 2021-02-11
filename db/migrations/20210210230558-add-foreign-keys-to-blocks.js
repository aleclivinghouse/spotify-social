module.exports = {
  up: (queryInterface, Sequelize) => {
    // Order belongsTo Customer
    return queryInterface.addColumn(
      'Blocks', // name of Source model
      'blockerId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          as: 'blocker',
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'Blocks', // name of Source model
          'being_blockedId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Target model
              as: 'being_blocked',
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
      'Blocks', // name of Source model
      'blockerId', // name of the key we're adding 
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Blocks', // name of Source model
          'being_blockedId', // name of the key we're adding 
        );
      });
  }
};