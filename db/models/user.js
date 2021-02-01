module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    display_name: {type: DataTypes.STRING, allow_null: false},
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    external_url: DataTypes.STRING,
    spotify_id: DataTypes.STRING,
    spotify_uri: DataTypes.STRING,
    followersCount: DataTypes.INTEGER
  }, {});

  User.associate = function(models){
    User.hasOne(models.Profile, { foreignKey: 'profile_id' });
    User.hasMany(models.Notification, {as: "user_notified"});
    User.hasMany(models.Notification, {as: "user_mentioned"});
    User.belongsToMany(models.Artist, { through: 'User_Favorite_Artists', foreignKey: "artist_id" });
    User.belongsToMany(models.Album, { through: 'User_Favorite_Albums', foreignKey: "album_id" });
    User.belongsToMany(models.Track, { through: 'User_Favorite_Tracks', foreignKey: "track_id" });
    User.belongsToMany(models.Genre, { through: 'User_Favorite_Genres', foreignKey: "genre_id" });
    User.belongsToMany(models.Pmthread, {through: "PM_Thread_Members", foreignKey: "pm_thread_id" });
    User.hasMany(models.Pmthread, {as: "PM_Moderator"});
    User.belongsToMany(models.User, { as: 'Being_Blocked', through: 'Blocks', foreignKey: 'blocker_id', onDelete: 'CASCADE'});
    User.belongsToMany(models.User, { as: 'Blocker', through: 'Blocks', foreignKey: 'being_blocked_id', onDelete: 'CASCADE'});
    User.belongsToMany(models.User, { as: 'Being_Followed', through: 'Follows', foreignKey: 'follower_id', onDelete: 'CASCADE'});
    User.belongsToMany(models.User, { as: 'Follower', through: 'Follows', foreignKey: 'being_followed_id', onDelete: 'CASCADE'});
    User.belongsToMany(models.User, { as: 'Inviter', through: 'PM_Invitations', foreignKey: 'being_invited_id', onDelete: 'CASCADE'});
    User.belongsToMany(models.User, { as: 'Being_Invited', through: 'PM_Invitations', foreignKey: 'inviter_id', onDelete: 'CASCADE'});
    User.hasMany(models.Post);
    User.hasMany(models.Postcomment);
    User.hasMany(models.Postlike);
    User.hasMany(models.Commentlike);
    User.hasMany(models.Message);
  }
  return User;
};
