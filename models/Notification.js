// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const User = require('./User');

// // Create Schema
// const Notification = db.define('Notification', {
//   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
//   text: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   href: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   date: {
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.NOW
//   }
// // });

// // //validate in the route
// Notification.hasOne(User, {as: "user_notified"});
// Notification.hasOne(User, {as: "user_mentioned_in"});

// Notification.sync({alter: true}).then(() => {
//   console.log('notification table created');
// });
// module.exports = Notification;
