module.exports = (sequelize, DataTypes) => {
    const PostFavoriteTag = sequelize.define('PostFavoriteTag', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Post_Favorite_Tag.associate = function(models){
      PostFavoriteTag.belongsTo(models.FavoriteTracksByAnArtistPost);
      PostFavoriteTag.belongsTo(models.Tag);
    }
    return PostFavoriteTag;
  };
  