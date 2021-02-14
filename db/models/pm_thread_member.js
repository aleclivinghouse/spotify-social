module.exports = (sequelize, DataTypes) => {
    const PmThreadMember = sequelize.define('PmThreadMember', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    PmThreadMember.associate = function(models){
      PmThreadMember.belongsTo(models.Pmthread);
      PmThreadMember.belongsTo(models.User);
    }
    return PmThreadMember;
  };
  