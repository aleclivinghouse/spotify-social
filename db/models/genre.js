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
      Genre.belongsToMany(User, { through: 'User_Favorite_Genres' });
      Genre.belongsToMany(Artist, { through: 'Artist_Genre' });
      Genre.belongsToMany(Track,{ through: 'Track_Genre' });
      Genre.belongsToMany(Album, { through: 'Album_Genre' });
      Genre.hasMany(Post);
      Genre.hasMany(Image);
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
    modelName: 'Genre',
  });
  return User;
};