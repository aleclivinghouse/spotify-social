'use strict';
const moment = require('moment');
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Track.belongsToMany(models.User, { through: 'User_Favorite_Tracks', foreignKey: "userId" });
      Track.belongsToMany(models.Artist, { through: 'Artist_Tracks', foreignKey: "artistId" });
      Track.belongsTo(models.Album, {foreignKey: "albumId"});
      Track.belongsToMany(models.Genre, { through: 'Track_Genres', foreignKey: "genreId" });
      Track.belongsToMany(models.Post, { through: 'Favorite_Tracks_By_An_Artist_Post', foreignKey: "postId" });
      Track.hasMany(models.Image);
    }
  };
  Track.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    track_number: {
      type: DataTypes.INTEGER,
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
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Popularity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: "tracks",
    modeName: "Track"
  });
  return Track;
};