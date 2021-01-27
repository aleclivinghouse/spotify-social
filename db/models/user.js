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
      User.hasOne(Profile);
      User.belongsTo(model.Notification, {as: "user_notified"});
      User.belongsTo(model.Notification, {as: "user_mentioned_in"});
      User.belongsToMany(model.Artist, { through: 'User_Favorite_Artists' });
      User.belongsToMany(model.Album, { through: 'User_Favorite_Albums' });
      User.belongsToMany(model.Track, { through: 'User_Favorite_Tracks' });
      User.belongsToMany(Genre, { through: 'User_Favorite_Genres' });
      User.belongsToMany(model.User, { as: 'Friends', through: 'friends' });
      User.belongsToMany(model.PM_Thread, {through: "PM_Thread_Members"})

      User.belongsToMany(model.User, { as: 'Being_Requested', through: 'friendRequests', foreignKey: 'requesterId', onDelete: 'CASCADE'});
      User.belongsToMany(model.User, { as: 'Requester', through: 'friendRequests', foreignKey: 'being_requestedId', onDelete: 'CASCADE'});
      User.belongsToMany(model.User, { as: 'Being_Followed', through: 'follows', foreignKey: 'followerId', onDelete: 'CASCADE'});
      User.belongsToMany(model.User, { as: 'Follower', through: 'follows', foreignKey: 'being_followedId', onDelete: 'CASCADE'});
      User.belongsToMany(model.User, { as: 'Inviter', through: 'pmInvitation', foreignKey: 'being_invitedId', onDelete: 'CASCADE'});
      User.belongsToMany(model.User, { as: 'Being_Invited', through: 'pmInvitation', foreignKey: 'inviterId', onDelete: 'CASCADE'});
      User.hasMany(model.Post);
      User.hasMany(model.Post_Comment);
      User.hasMany(model.Post_Like);
      User.hasMany(model.Comment);
      User.hasMany(model.Comment_like);
      User.hasMany(model.Message);
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