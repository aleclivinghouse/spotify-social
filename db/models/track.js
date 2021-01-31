module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    track_number: {
      type: DataTypes.INTEGER
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

  Track.associate = function(models){
      Track.belongsToMany(models.User, { through: 'User_Favorite_Tracks', foreignKey: "user_id" });
      Track.belongsToMany(models.Artist, { through: 'Artist_Tracks', foreignKey: "artist_id" });
      Track.belongsTo(models.Album, {foreignKey: "album_id"});
      Track.belongsTo(models.Post, {foreignKey: "postId", as: "By_Track"});
      Track.belongsToMany(models.Genre, { through: 'Track_Genres', foreignKey: "genre_id" });
      Track.belongsToMany(models.Post, { as: "By_Artist_track", through: 'Favorite_Tracks_By_An_Artist_Post', foreignKey: "post_id" });
      Track.hasMany(models.Image);
  }
  return Track;
};

