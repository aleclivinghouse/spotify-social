'use strict';
const moment = require('moment');
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Post.hasOne(models.Artist);
        Post.hasOne(models.User);
        Post.hasOne(models.Album);
        Post.belongsToMany(models.Track, { through: 'Favorite_Tracks_By_An_Artist_Post' });
        Post.hasMany(models.Post_Comment);
        Post.hasMany(models.Post_Likes);
    }
  };
  Post.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lyric_annotation: {
        type: DataTypes.STRING,
        allowNull: true
      },
      would_recommend: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      rating: {
        type: DataTypes.DECIMAL(10, 1),
        allowNull: true
      },
    date: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
       }
    }
  });
  return Post;
};