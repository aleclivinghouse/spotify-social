module.exports = (sequelize, DataTypes) => {
  const Pmthread = sequelize.define('Pmthread', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    moderator: {
      type: DataTypes.STRING,
    },
  }, {});

  Pmthread.associate = function(models){
    Pmthread.belongsToMany(models.User, { through: 'PM_Thread_Members' });
    Pmthread.hasMany(models.Message);
  }
  return Pmthread;
};
