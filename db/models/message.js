module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false } ,
    text: {
      type: DataTypes.STRING
    }   
  }, {});

  Message.associate = function(models){
    Message.belongsTo(models.Pmthread, {foreignKey:"pm_thread_id"});
    Message.belongsTo(models.User, {foreignKey: "user_id"});
  }
  return Message;
};
