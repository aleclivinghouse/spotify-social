const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Post = require('./Post');

// Create Schema
const Post_Like = db.define('Post_Like', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

//validate in the route
Post_Like.hasOne(Post);
Post_Like.hasOne(User);

Post_Like.sync({alter: true}).then(() => {
  console.log(' post like table created');
});
module.exports = Post_Like;
