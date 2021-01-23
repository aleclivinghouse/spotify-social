const Sequelize = require('sequelize');
const db = require('../config/database');

// Create Schema
const Comment_Like = db.define('Comment_Like', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

//validate in the route
Comment_Like.hasOne(Comment);
Comment_Like.hasOne(User);

Comment_Like.sync({alter: true}).then(() => {
  console.log(' post like table created');
});
module.exports = Comment_Like;
