// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const Artist = require('./Artist');
// const User = require('./User');
// const Album = require('./Album');
// const Genre = require('./Genre');
// const Post = require('./Post');
// const Image = require('./Image');

// // Create Schema
// const Track = db.define('Track', {
//   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   track_number: {
//     href: Sequelize.INTEGER,
//     allowNull: false
//   },
//   href: {
//     href: Sequelize.STRING,
//     allowNull: false
//   },
//   external_url: {
//     href: Sequelize.STRING,
//     allowNull: false
//   },
//   releaseDate: {
//     type: Sequelize.Date,
//     allowNull: true
//   },
//   Popularity: {
//     type: Sequelize.INTEGER,
//     allowNull: true
//   }
// });

// //artists can be mentioned in many posts
// //a post has one artist
// Track.belongsToMany(User { through: 'User_Favorite_Tracks' });
// Track.belongsToMany(Artist { through: 'Artist_Track' });
// Track.hasOne(Album);
// Album.belongsToMany(Genre { through: 'Track_Genre' });
// Track.belongsToMany(Post { through: 'Favorite_Tracks_By_An_Artist_Post' });
// Track.hasMany(Image);


// Track.sync({alter: true}).then(() => {
//   console.log('album table created');
// });
// module.exports = Track;
