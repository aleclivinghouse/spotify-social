const Sequelize = require('sequelize');
const db = require('../config/database');
const Notification = require('./Notification');
const Artist = require('./Artist');
const User = require('./User');
const Track = require('./Track');
const Genre = require('./Genre');
const PM_Thread = require('./PM_Thread');
const Post = require('./Post');
const Post_Comment = require('./Post_Comment');
const Post_Like = require('./Post_Like');
const Comment = require('./Comment');
const Comment_Like = require('./Comment_Like');
const Image = require('./Image');

// Create Schema
const Album = db.define('Album', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  album_type: {
    href: Sequelize.STRING,
    allowNull: false
  },
  href: {
    href: Sequelize.STRING,
    allowNull: false
  },
  external_url: {
    href: Sequelize.STRING,
    allowNull: false
  },
  releaseDate: {
    type: Sequelize.Date,
    allowNull: true
  },
  Popularity: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

//artists can be mentioned in many posts
//a post has one artist
Album.belongsToMany(User { through: 'User_Favorite_Albums' });
Album.belongsToMany(Artist { through: 'Album_Artist' });
Album.hasMany(Track);
Album.belongsToMany(Genre { through: 'Album_Genre' });
Artist.hasMany(Post);
Artist.hasMany(Image);


Album.sync({alter: true}).then(() => {
  console.log('album table created');
});
module.exports = Album;
