module.exports = (sequelize, DataTypes) => {
    const PM_Invitation = sequelize.define('PM_Invitation', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    PM_Invitation.associate = function(models){
    PM_Invitation.belongsTo(models.User, {as: 'inviter'});
    PM_Invitation.belongsTo(models.User, {as: 'being_invited'});
    }
    return PM_Invitation;
  };
  