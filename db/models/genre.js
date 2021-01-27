'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.User, { through: 'User_Favorite_Genres', foreignKey: "userId"});
      Genre.belongsToMany(models.Artist, { through: 'Artist_Genres', foreignKey: "artistId"});
      Genre.belongsToMany(models.Track,{ through: 'Track_Genres', foreignKey: "trackId" });
      Genre.belongsToMany(models.Album, { through: 'Album_Genres', foreignKey: "genreId" });
      Genre.hasMany(models.Post);
      Genre.hasMany(models.Image);
    }
  };
  Genre.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
    sequelize,
    tableName: "genres",
    modelName: "Genre",
  });
  return Genre;
};