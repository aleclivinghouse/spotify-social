module.exports = (sequelize, DataTypes) => {
    const User_Favorite_Track = sequelize.define('User_Favorite_Track', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}

    }, {});
  
    User_Favorite_Track.associate = function(models){
        User_Favorite_Track.belongsTo(models.User);
        User_Favorite_Track.belongsTo(models.Track);
    }
    return User_Favorite_Track;
  };
  