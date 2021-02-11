module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define('Follow', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Follow.associate = function(models){
    Follow.belongsTo(models.User, {as: 'follower', foreignKey: 'being_followedId'});
    Follow.belongsTo(models.User, {as: 'being_followed', foreignKey: 'followerId'});
    }
    return Follow;
  };
  