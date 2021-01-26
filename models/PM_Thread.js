const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Message = require('./Message');

// Create Schema
const PM_Thread = db.define('PM_Thread', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

//validate in the route
PM_Thread.hasOne(User { as: 'Moderator' });
PM_Thread.belongsToMany(User { through: 'PM_Thread_User' });
PM_Thread.hasMany(Message);
PM_Thread.sync({alter: true}).then(() => {
  console.log('PM_Thread table created');
});
module.exports = PM_Thread;
