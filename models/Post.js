// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const Artist = require('./Artist');
// const User = require('./User');
// const Track = require('./Track');
// const Album = require('./Album');
// const Post_Comment = require('./Post_Comment');
// const Post_Likes = require('./Post_Likes');

// // Create Schema
// const Post = db.define('Post', {
//   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   type: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   text: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lyric_annotation: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   would_recommend: {
//     type: Sequelize.BOOLEAN,
//     allowNull: true
//   },
//   rating: {
//     type: Sequelize.DECIMAL(10, 1),
//     allowNull: true
//   },
//   date: {
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.NOW
//   }
// });

// //validate in the route
// Post.hasOne(Artist);
// Post.hasOne(User);
// Post.hasOne(Album);
// Post.belongsToMany(Track { through: 'Favorite_Tracks_By_An_Artist_Post' });
// Post.hasMany(Post_Comment);
// Post.hasMany(Post_Likes);


// Post.sync({alter: true}).then(() => {
//   console.log(' post table created');
// });
// module.exports = Post;
