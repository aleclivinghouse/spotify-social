'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
    display_name: {type: DataTypes.STRING, allow_null: false},
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    external_url: DataTypes.STRING,
    spotify_id: DataTypes.STRING,
    spotify_uri: DataTypes.STRING,
    followersCount: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};