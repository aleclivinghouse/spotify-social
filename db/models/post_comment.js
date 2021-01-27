'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  class Post_Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post_Comment.hasMany(models.Comment_Like);
      Post_Comment.belongsTo(models.User, {foreignKey: "userId"});
      Post_Comment.belongsTo(models.Post, {foreignKey: "postId"});
    }
  };
  Post_Comment.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: "post_comments",
    modelName: "Post_Comment", 
  });
  return Post_Comment;
};