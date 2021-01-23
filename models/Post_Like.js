const Sequelize = require('sequelize');
const db = require('../config/database');

// Create Schema
const Post_Like = db.define('Post_Like', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
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
