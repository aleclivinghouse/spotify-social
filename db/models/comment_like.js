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
      Comment_Like.hasOne(models.Comment);
      Comment_Like.hasOne(models.User);
    }
  };
  Comment_Like.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    date: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
       }
      }
    }, {
    sequelize,
    modelName: 'Comment_Like',
  });
  return Comment_Like;
};