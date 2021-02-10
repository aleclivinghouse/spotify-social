module.exports = (sequelize, DataTypes) => {
    const Pm_Thread_Member = sequelize.define('Pm_Thread_Member', {
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      PmthreadId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    Pm_Thread_Member.associate = function(models){
      Pm_Thread_Member.hasMany(models.Pmthread);
      Pm_Thread_Member.hasMany(models.User);
    }
    return Pm_Thread_Member;
  };
  