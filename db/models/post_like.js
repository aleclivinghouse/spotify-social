'use strict';
const moment = require('moment');
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post_Like.belongsTo(models.Post, {foreignKey: "postId"});
      Post_Like.belongsTo(models.User, {foreignKey: "userId"}); 
    }
  };
  Post_Like.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  }, {
    sequelize,
    modelName: 'Post_Like',
  });
  return Post_Like;
};


/*

*/