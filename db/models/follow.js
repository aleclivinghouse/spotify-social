module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define('Follow', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Follow.associate = function(models){
    Follow.belongsTo(models.User, {as: 'follower', foreignKey: 'followerId'});
    Follow.belongsTo(models.User, {as: 'being_followed', foreignKey: 'being_followedId'});
    }
    return Follow;
  };
  