module.exports = (sequelize, DataTypes) => {
    const Pm_Thread_Member = sequelize.define('Pm_Thread_Member', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Pm_Thread_Member.associate = function(models){
      Pm_Thread_Member.belongsTo(models.Pmthread);
      Pm_Thread_Member.belongsTo(models.User);
    }
    return Pm_Thread_Member;
  };
  