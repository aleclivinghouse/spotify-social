// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const Artist = require('./Artist');
// const User = require('./User');
// const Track = require('./Track');
// const Album = require('./Album');
// const Genre = require('./Genre');
// const Post = require('./Post');
// const Image = require('./Image');

// // Create Schema
// const Genre = db.define('Genre', {
//   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// //artists can be mentioned in many posts
// //a post has one artist
// Genre.belongsToMany(User { through: 'User_Favorite_Genres' });
// Genre.belongsToMany(Artist { through: 'Artist_Genre' });
// Genre.belongsToMany(Track { through: 'Track_Genre' });
// Genre.belongsToMany(Album { through: 'Album_Genre' });
// Genre.hasMany(Post);
// Genre.hasMany(Image);


// Genre.sync({alter: true}).then(() => {
//   console.log('genre table created');
// });
// module.exports = Genre;
