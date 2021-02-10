module.exports = (sequelize, DataTypes) => {
    const User_Favorite_Artist = sequelize.define('User_Favorite_Artist', {
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      ArtistId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    User_Favorite_Artist.associate = function(models){
      User_Favorite_Artist.hasMany(models.User);
      User_Favorite_Artist.hasMany(models.Artist);
    }
    return User_Favorite_Artist;
  };
  