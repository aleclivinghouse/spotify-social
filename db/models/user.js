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
      User.hasOne(models.Profile, { foreignKey: 'profileId' });
      User.hasMany(models.Notification, {as: "user_notified"});
      User.hasMany(models.Notification, {as: "user_mentioned"});
      User.belongsToMany(models.Artist, { through: 'User_Favorite_Artists', foreignKey: "artistId" });
      User.belongsToMany(models.Album, { through: 'User_Favorite_Albums', foreignKey: "albumId" });
      User.belongsToMany(models.Track, { through: 'User_Favorite_Tracks', foreignKey: "trackId" });
      User.belongsToMany(models.Genre, { through: 'User_Favorite_Genres', foreignKey: "genreId" });
      User.belongsToMany(models.User, { as: 'FriendOne', through: 'friends', foreignKey: 'friendOneId' });
      User.belongsToMany(models.User, { as: 'FriendTwo', through: 'friends', foreignKey: 'friendTwoId' });
      User.belongsToMany(models.PM_Thread, {through: "PM_Thread_Members", foreignKey: "pmThreadId" });
      User.hasMany(models.PM_Thread, {as: "PM_Moderator"});
      User.belongsToMany(models.User, { as: 'Being_Requested', through: 'Friend_Requests', foreignKey: 'requesterId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Requester', through: 'Friend_Requests', foreignKey: 'being_requestedId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Being_Followed', through: 'Follows', foreignKey: 'followerId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Follower', through: 'Follows', foreignKey: 'being_followedId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Inviter', through: 'PM_Invitations', foreignKey: 'being_invitedId', onDelete: 'CASCADE'});
      User.belongsToMany(models.User, { as: 'Being_Invited', through: 'PM_Invitations', foreignKey: 'inviterId', onDelete: 'CASCADE'});
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
    followersCount: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: "users",
    modelName: "User",
  });
  return User;
};