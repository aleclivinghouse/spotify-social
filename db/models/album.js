'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsToMany(models.User, { through: 'User_Favorite_Albums', foreignKey:"userId" });
      Album.belongsToMany(models.Artist, { through: 'Album_Artists', foreignKey: "artistId" });
      Album.hasMany(models.Track);
      Album.belongsToMany(models.Genre, { through: 'Album_Genres', foreignKey: "genreId" });
      Album.hasMany(models.Post);
      Album.hasMany(models.Image);
    }
  };
  Album.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
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
    tableName: "albums",
    modelName: "Album",
  });
  return Album;
};