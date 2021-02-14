module.exports = (sequelize, DataTypes) => {
    const UserFavoriteTrack = sequelize.define('UserFavoriteTrack', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}

    }, {});
  
    UserFavoriteTrack.associate = function(models){
        UserFavoriteTrack.belongsTo(models.User);
        UserFavoriteTrack.belongsTo(models.Track);
    }
    return UserFavoriteTrack;
  };
  