module.exports = (sequelize, DataTypes) => {
    const User_Favorite_Album = sequelize.define('User_Favorite_Album', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    User_Favorite_Album.associate = function(models){
        User_Favorite_Album.belongsTo(models.User);
        User_Favorite_Album.belongsTo(models.Album);
    }
    return User_Favorite_Album;
  };
  