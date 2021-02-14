module.exports = (sequelize, DataTypes) => {
    const UserFavoriteAlbum = sequelize.define('UserFavoriteAlbum', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    User_Favorite_Album.associate = function(models){
        UserFavoriteAlbum.belongsTo(models.User);
        UserFavoriteAlbum.belongsTo(models.Album);
    }
    return UserFavoriteAlbum;
  };
  