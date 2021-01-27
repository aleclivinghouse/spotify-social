'use strict';
const moment = require('moment');
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notification.belongsTo(models.User, {as: "user_notified"});
      Notification.belongsTo(models.User, {as: "user_mentioned_in"});
    }
  };
  Notification.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        text: {
        type: DataTypes.STRING,
        allowNull: false
        },
        href: {
        type: DataTypes.STRING,
        allowNull: true
        },
        date: {
        type: DataTypes.DATE
        }
    }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};