module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    name: {
        type: DataTypes.STRING,
        allowNull: true
        },
    href: {
          type: DataTypes.STRING,
          allowNull: true
     },
     followers_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
     external_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    followers_count: {
        type: DataTypes.INTEGER,
        allowNull: true
     },
  }, {});

    Artist.associate = function(models){
      Artist.belongsToMany(models.User, { through: 'User_Favorite_Artists', foreignKey: "user_id" });
      Artist.belongsToMany(models.Album, { through: 'Album_Artists', foreignKey: "album_id" });
      Artist.belongsToMany(models.Track, { through: 'Artist_Tracks', foreignKey: "track_id" });
      Artist.belongsToMany(models.Genre, { through: 'Artist_Genres', foreignKey: "genre_id"});
      Artist.hasMany(models.Post);
      Artist.hasMany(models.Image);
  }
  return Artist;
};
