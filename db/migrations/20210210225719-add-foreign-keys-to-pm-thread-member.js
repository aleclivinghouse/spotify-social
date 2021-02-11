module.exports = {
  up: (queryInterface, Sequelize) => {
    // Order belongsTo Customer
    return queryInterface.addColumn(
      'Pm_Thread_Members', // name of Source model
      'UserId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'Pm_Thread_Members', // name of Source model
          'PmthreadId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Pmthreads', // name of Source model
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
      'Pm_Thread_Members', // name of Source model
      'UserId', // name of the key we're adding 
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Pm_Thread_Members', // name of Source model
          'PmthreadId', // name of the key we're adding 
        );
      });
  }
};