'use strict';
const moment = require('moment');
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment_Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment_Like.belongsTo(models.Post_Comment, {foreignKey: "postCommentId"});
      Comment_Like.belongsTo(models.User), {foreignKey: "userId"};
    }
  };
  Comment_Like.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false }
    }, {
    sequelize,
    tableName: "comment_likes",
    modelName: "Comment_Like",
  });
  return Comment_Like;
};