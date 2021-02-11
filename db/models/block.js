module.exports = (sequelize, DataTypes) => {
    const Block = sequelize.define('Block', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Block.associate = function(models){
    Block.belongsTo(models.User, {as: 'blocker'});
    Block.belongsTo(models.User, {as: 'being_blocked'});
    }
    return Block;
  };
  