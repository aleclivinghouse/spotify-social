module.exports = (sequelize, DataTypes) => {
    const User_Favorite_Album = sequelize.define('User_Favorite_Album', {
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      AlbumId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    User_Favorite_Album.associate = function(models){
        User_Favorite_Album.hasMany(models.User);
        User_Favorite_Album.hasMany(models.Album);
    }
    return User_Favorite_Album;
  };
  