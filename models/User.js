const Sequelize = require('sequelize');
const db = require('../config/database');

// Create Schema
const User = db.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  display_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  external_url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  spotify_id: {
    type: Sequelize.STRING,
    allowNull: true
  },
  spotify_uri: {
    type: Sequelize.STRING,
    allowNull: true
  },
  followersCount: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

User.hasOne(Profile);
User.belongsTo(Notification, {as: "user_notified"});
User.belongsTo(Notification, {as: "user_mentioned_in"});
User.belongsToMany(Artist { through: 'User_Favorite_Artists' });
User.belongsToMany(Album { through: 'User_Favorite_Albums' });
User.belongsToMany(Track { through: 'User_Favorite_Tracks' });
User.belongsToMany(Genre { through: 'User_Favorite_Genres' });
User.belongsToMany(User, { as: 'Friends', through: 'friends' });
User.belongsToMany(PM_Thread, {through: "PM_Thread_Member"})
User.belongsToMany(User, { as: 'Being_Requested', through: 'friendRequests', foreignKey: 'requesterId', onDelete: 'CASCADE'});
User.belongsToMany(User, { as: 'Requesting', through: 'friendRequests', foreignKey: 'requesteeId', onDelete: 'CASCADE'});
User.belongsToMany(User, { as: 'Being_Followed', through: 'follows', foreignKey: 'beingFollowedId', onDelete: 'CASCADE'});
User.belongsToMany(User, { as: 'Following', through: 'follows', foreignKey: 'followingId', onDelete: 'CASCADE'});
User.hasMany(Post));
User.hasMany(Post_Comment));
User.hasMany(Post_Like));
User.hasMany(Comment));
User.hasMany(Comment_like));
User.belongsToMany(PM_Thread { through: 'PM_Thread_User' });


User.sync({alter: true}).then(() => {
  console.log(' user table created');
});
module.exports = User;
