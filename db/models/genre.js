module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {});

  Genre.associate = function(models){
    Genre.belongsToMany(models.User, { through: 'User_Favorite_Genres', foreignKey: "user_id"});
    Genre.belongsToMany(models.Artist, { through: 'Artist_Genres', foreignKey: "artist_id"});
    Genre.belongsToMany(models.Track,{ through: 'Track_Genres', foreignKey: "track_id" });
    Genre.belongsToMany(models.Album, { through: 'Album_Genres', foreignKey: "album_id" });
    Genre.hasMany(models.Post);
    Genre.hasMany(models.Image);
  }
  return Genre;
};
