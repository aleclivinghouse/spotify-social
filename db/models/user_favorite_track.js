module.exports = (sequelize, DataTypes) => {
    const User_Favorite_Track = sequelize.define('User_Favorite_Track', {
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      TrackId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    User_Favorite_Track.associate = function(models){
        User_Favorite_Track.hasMany(models.User);
        User_Favorite_Track.hasMany(models.Track);
    }
    return User_Favorite_Track;
  };
  