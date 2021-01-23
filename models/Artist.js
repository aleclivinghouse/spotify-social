const Sequelize = require('sequelize');
const db = require('../config/database');

// Create Schema
const Artist = db.define('Artist', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  followersCount: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
});

//artists can be mentioned in many posts
//a post has one artist
Artist.belongsToMany(User { through: 'User_Favorite_Artists' });
Artist.belongsToMany(Album { through: 'Album_Artist' });
Artist.belongsToMany(Track { through: 'Artist_Track' });
Artist.belongsToMany(Genres{ through: 'Artist_Genre' });
Artist.hasMany(Post);
Artist.hasMany(Image);


Artist.sync({alter: true}).then(() => {
  console.log('artist table created');
});
module.exports = Artist;
