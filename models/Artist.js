// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const Notification = require('./Notification');
// const User = require('./User');
// const Album = require('./Album');
// const Track = require('./Track');
// const Genre = require('./Genre');
// const PM_Thread = require('./PM_Thread');
// const Post = require('./Post');
// const Post_Comment = require('./Post_Comment');
// const Post_Like = require('./Post_Like');
// const Comment = require('./Comment');
// const Comment_Like = require('./Comment_Like');
// const Image = require('./Image');

// // Create Schema
// const Artist = db.define('Artist', {
//     id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
//     name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   followersCount: {
//     type: Sequelize.INTEGER,
//     allowNull: true
//   },
// });

// //artists can be mentioned in many posts
// //a post has one artist
// Artist.belongsToMany(User { through: 'User_Favorite_Artists' });
// Artist.belongsToMany(Album { through: 'Album_Artist' });
// Artist.belongsToMany(Track { through: 'Artist_Track' });
// Artist.belongsToMany(Genres{ through: 'Artist_Genre' });
// Artist.hasMany(Post);
// Artist.hasMany(Image);


// Artist.sync({alter: true}).then(() => {
//   console.log('artist table created');
// });
// module.exports = Artist;
