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
    followers_count: DataTypes.INTEGER
  }, {});

  User.associate = function(models){
    User.hasOne(models.Profile);
    User.hasMany(models.Notification);
    User.hasMany(models.UserFavoriteAlbum);
    User.hasMany(models.UserFavoriteArtist);
    User.hasMany(models.UserFavoriteTrack);
    User.hasMany(models.UserFavoriteGenre);
    User.hasMany(models.PmThreadMember);
    User.hasMany(models.Follow, {as: 'follower', foreignKey: 'being_followedId', onDelete: 'CASCADE'});
    User.hasMany(models.Follow, {as: 'being_followed', foreignKey: 'followerId', onDelete: 'CASCADE'});
    User.hasMany(models.Block, {as: 'blocker', foreignKey: 'being_blockedId', onDelete: 'CASCADE'});
    User.hasMany(models.Block, {as: 'being_blocked', foreignKey: 'blockerId', onDelete: 'CASCADE'});
    // User.hasMany(models.Follow, {as: 'follower'});
    // User.hasMany(models.Follow, {as: 'being_followed'});
    // User.belongsToMany(models.Artist, { through: 'User_Favorite_Artists'});
    // User.belongsToMany(models.Album, { through: 'User_Favorite_Albums' });
    // User.belongsToMany(models.Track, { through: 'User_Favorite_Tracks' });
    // User.belongsToMany(models.Genre, { through: 'User_Favorite_Genres'});
    // User.belongsToMany(models.Pmthread, {through: "PM_Thread_Members",});
    // User.belongsToMany(models.User, { as: 'Being_Blocked', through: 'Blocks', foreignKey: 'blockerId', onDelete: 'CASCADE'});
    // User.belongsToMany(models.User, { as: 'Blocker', through: 'Blocks', foreignKey: 'being_blockedId', onDelete: 'CASCADE'});
    // User.belongsToMany(models.User, { as: 'Being_Followed', through: 'Follows', foreignKey: 'followerId', onDelete: 'CASCADE'});
    // User.belongsToMany(models.User, { as: 'Follower', through: 'Follows', foreignKey: 'being_followedId', onDelete: 'CASCADE'});
    // User.belongsToMany(models.User, { as: 'Inviter', through: 'PM_Invitations', foreignKey: 'being_invitedId', onDelete: 'CASCADE'});
    // User.belongsToMany(models.User, { as: 'Being_Invited', through: 'PM_Invitations', foreignKey: 'inviterId', onDelete: 'CASCADE'});
    User.hasMany(models.PM_Invitation);
    User.hasMany(models.Block);
    User.hasMany(models.Post);
    User.hasMany(models.Postcomment);
    User.hasMany(models.Postlike);
    User.hasMany(models.Commentlike);
    User.hasMany(models.Message);
  }
  return User;
};
