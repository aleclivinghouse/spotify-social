const Sequelize = require('sequelize');
const db = require('../config/database');

// Create Schema
const Message = db.define('Message', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  text: {
    type: Sequelize.STRING,
    defaultValue: Sequelize.NOW
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

//validate in the route
Message.hasOne(PM_Thread);
Message.hasOne(User);

Message.sync({alter: true}).then(() => {
  console.log('Message table created');
});
module.exports = Message;
