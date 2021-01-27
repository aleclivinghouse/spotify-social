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
      Album.belongsToMany(models.User, { through: 'User_Favorite_Albums' });
      Album.belongsToMany(models.Artist, { through: 'Album_Artist' });
      Album.hasMany(models.Track);
      Album.belongsToMany(models.Genre, { through: 'Album_Genre' });
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
      href: DataTypes.STRING,
      allowNull: false
    },
    href: {
      href: DataTypes.STRING,
      allowNull: false
    },
    external_url: {
      href: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.Date,
      allowNull: true
    },
    Popularity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};