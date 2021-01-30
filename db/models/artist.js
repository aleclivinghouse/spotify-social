'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsToMany(models.User, { through: 'User_Favorite_Artists', foreignKey: "userId" });
      Artist.belongsToMany(models.Album, { through: 'Album_Artists', foreignKey: "albumId" });
      Artist.belongsToMany(models.Track, { through: 'Artist_Tracks', foreignKey: "trackId" });
      Artist.belongsToMany(models.Genre, { through: 'Artist_Genres', foreignKey: "genreId"});
      Artist.hasMany(models.Post);
      Artist.hasMany(models.Image);
    }
  };
  Artist.init({
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    name: {
        type: DataTypes.STRING,
        allowNull: true
        },
    href: {
          type: DataTypes.STRING,
          allowNull: true
     },
     external_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
        followersCount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
  }, {
    sequelize,
    tableName: "artists",
    modelName: "Artist",
  });
  return Artist;
};