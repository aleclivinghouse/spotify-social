module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
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
    Track.belongsToMany(models.Artist, { through: 'Artist_Tracks'});
    Track.belongsTo(models.Album);
    Track.belongsToMany(models.Genre, { through: 'Track_Genres'});
    Track.belongsToMany(models.Post, { as: "posts", through: 'Favorite_Tracks_By_An_Artist_Post'});
    Track.hasMany(models.Image);
  }
  return Track;
};

