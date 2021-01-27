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
      Message.belongsTo(models.PM_Thread);
      Message.belongsTo(models.User);
    }
  };
  Message.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    text: {
        type: DataTypes.STRING
      },
    date: {
      type: DataTypes.DATE,
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