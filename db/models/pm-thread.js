'use strict';
const {
  Model, 
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PM_Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PM_Thread.hasOne(modes.User, { as: 'Moderator' });
      PM_Thread.belongsToMany(models.User, { through: 'PM_Thread_User' });
      PM_Thread.hasMany(models.Message);
    }
  };
  PM_Thread.init({
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
     },
     title: {
        type: Sequelize.String
       }
    }, {
    sequelize,
    modelName: 'PM_Thread',
  });
  return PM_Thread;
};