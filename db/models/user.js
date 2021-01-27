'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile);
      User.belongsTo(models.Notification, {as: "user_notified"});
      User.belongsTo(models.Notification, {as: "user_mentioned_in"});
      User.belongsToMany(models.Artist, { through: 'User_Favorite_Artists' });
      User.belongsToMany(models.Album, { through: 'User_Favorite_Albums' });
      User.belongsToMany(models.Track, { through: 'User_Favorite_Tracks' });
      User.belongsToMany(models.Genre, { through: 'User_Favorite_Genres' });
      User.belongsToMany(models.User, { as: 'Friends', through: 'friends' });
      User.belongsToMany(models.PM_Thread, {through: "PM_Thread_Members"})

      User.belongsToMany(models.User, { as: 'Being_Requested', through: 'friendRequests', foreignKey: 'requesterId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Requester', through: 'friendRequests', foreignKey: 'being_requestedId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Being_Followed', through: 'follows', foreignKey: 'followerId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Follower', through: 'follows', foreignKey: 'being_followedId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Inviter', through: 'pmInvitation', foreignKey: 'being_invitedId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Being_Invited', through: 'pmInvitation', foreignKey: 'inviterId', onDelete: 'CASCADE'});
      User.hasMany(models.Post);
      User.hasMany(models.Post_Comment);
      User.hasMany(models.Post_Like);
      User.hasMany(models.Post_Comment);
      User.hasMany(models.Comment_Like);
      User.hasMany(models.Message);
    }
  };
  User.init({
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
    display_name: {type: DataTypes.STRING, allow_null: false},
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    external_url: DataTypes.STRING,
    spotify_id: DataTypes.STRING,
    spotify_uri: DataTypes.STRING,
    followersCount: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};