module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    album_type: {
      type:DataTypes.STRING,
      allowNull: false 
    },
    href: {
      type: DataTypes.STRING,
      allowNull: false
    },
    external_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    popularity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {});

    Album.associate = function(models){
      Album.belongsToMany(models.User, { through: 'User_Favorite_Albums', foreignKey:"user_id" });
      Album.belongsToMany(models.Artist, { through: 'Album_Artists', foreignKey: "artist_id" });
      Album.hasMany(models.Track);
      Album.belongsToMany(models.Genre, { through: 'Album_Genres', foreignKey: "genre_id" });
      Album.hasMany(models.Post);
      Album.hasMany(models.Image);
  }
  return Album;
};
