module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    spotify_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
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

  Track.associate = function (models) {
    Track.belongsToMany(models.User, { through: 'User_Favorite_Tracks'});
    Track.belongsTo(models.Artist);
    Track.belongsTo(models.Album);
    Track.belongsToMany(models.Genre, { through: 'Track_Genres'});
    Track.belongsToMany(models.FavPost, { as: "posts", through: 'Favorite_Tracks_By_An_Artist_Post'});
    Track.hasMany(models.Image);
    Track.hasMany(models.Post);
  }
  return Track;
};

