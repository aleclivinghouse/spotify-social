const Sequelize = require('sequelize');
const db = require('../config/database');

// Create Schema
const Post_Comment = db.define('Post_Comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

//validate in the route
Post_Comment.hasMany(Comment_Likes);
Post_Comment.hasOne(User);

Post_Comment.sync({alter: true}).then(() => {
  console.log(' post comment table created');
});
module.exports = Post_Comment;