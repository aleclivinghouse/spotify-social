'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, { foreignKey: 'userId' });
      Profile.hasMany(models.Image);
    }
  };
  Profile.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Thumbnail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthDate: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: "Profile"
  });
  return Profile;
};