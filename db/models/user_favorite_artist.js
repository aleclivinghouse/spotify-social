module.exports = (sequelize, DataTypes) => {
    const User_Favorite_Artist = sequelize.define('User_Favorite_Artist', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    User_Favorite_Artist.associate = function(models){
      User_Favorite_Artist.belongsTo(models.User);
      User_Favorite_Artist.belongsTo(models.Artist);
    }
    return User_Favorite_Artist;
  };
  