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
      Profile.hasOne(models.User);
    }
  };
  Profile.init({
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    bio: {
      type: Sequelize.STRING,
      allowNull: true
    },
    coverPhoto: {
      type: Sequelize.STRING,
      allowNull: true
    },
    Thumbnail: {
      type: Sequelize.STRING,
      allowNull: true
    },
    birthDate: {
      type: Sequelize.DATE
    }
  });
  return Profile;
};