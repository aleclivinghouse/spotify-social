module.exports = (sequelize, DataTypes) => {
    const UserFavorit_Artist = sequelize.define('UserFavoriteArtist', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    UserFavoriteArtist.associate = function(models){
      UserFavoriteArtist.belongsTo(models.User);
      UserFavoriteArtist.belongsTo(models.Artist);
    }
    return UserFavoriteArtist;
  };
  