module.exports = (sequelize, DataTypes) => {
    const PMInvitation = sequelize.define('PMInvitation', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    PMInvitation.associate = function(models){
    PMInvitation.belongsTo(models.User, {as: 'inviter'});
    PMInvitation.belongsTo(models.User, {as: 'being_invited'});
    }
    return PMInvitation;
  };
  