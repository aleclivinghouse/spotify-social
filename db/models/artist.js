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
      Artist.belongsToMany(models.User, { through: 'User_Favorite_Artists' });
      Artist.belongsToMany(models.Album, { through: 'Album_Artist' });
      Artist.belongsToMany(models.Track, { through: 'Artist_Track' });
      Artist.belongsToMany(models.Genre,{ through: 'Artist_Genre' });
      Artist.hasMany(models.Post);
      Artist.hasMany(models.Image);
    }
  };
  Artist.init({
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
        },
    name: {
        type: DataTypes.STRING,
        allowNull: true
        },
        followersCount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};