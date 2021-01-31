module.exports = (sequelize, DataTypes) => {
  const PM_Thread = sequelize.define('PM_Thread', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }   
  }, {});

  PM_Thread.associate = function(models){
    PM_Thread.belongsTo(models.User, {foreignKey: "moderator_id"});
    PM_Thread.belongsToMany(models.User, { through: 'PM_Thread_User' });
    PM_Thread.hasMany(models.Message);
  }
  return PM_Thread;
};
