'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.hasOne(models.PM_Thread);
      Message.hasOne(models.User);
    }
  };
  Message.init({
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    text: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.NOW
      },
    date: {
      type: Sequelize.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
       }
      }
    }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};