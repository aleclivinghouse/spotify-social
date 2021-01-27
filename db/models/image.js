'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Artist, {foreignKey: "artistId"});
      Image.belongsTo(models.Album, {foreignKey: "albumId"});
      Image.belongsTo(models.Track, {foreignKey: "trackId"});
      Image.belongsTo(models.Profile, {foreignKey: "profileId"});
    }
  };
  Image.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      href: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};