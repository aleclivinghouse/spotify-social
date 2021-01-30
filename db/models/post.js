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
        Post.belongsTo(models.Artist, { foreignKey: 'artistId' });
        Post.belongsTo(models.User, { foreignKey: 'userId' });
        Post.belongsTo(models.Album, { foreignKey: 'albumId' });
        Post.belongsTo(models.Track, { as: "Recommend_Track", foreignKey: 'trackId' });
        Post.belongsToMany(models.Track, { as: "By_Artist", through: 'Favorite_Tracks_By_An_Artist_Post', foreignKey: 'trackId' });
        Post.hasMany(models.Post_Comment);
        Post.hasMany(models.Post_Like);
        Post.belongsToMany(models.Tag, { through: 'Post_Tags', foreignKey: 'tagId' });
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
      }
  }, {
    sequelize,
    tableName: "posts",
    modelName: "Post",
  });
  return Post;
};