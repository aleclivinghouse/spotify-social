module.exports = (sequelize, DataTypes) => {
    const PostFavoriteTrack = sequelize.define('PostFavoriteTrack', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    PostFavoriteTrack.associate = function(models){
      PostFavoriteTrack.belongsTo(models.FavoriteTracksByAnArtistPost);
      PostFavoriteTrack.belongsTo(models.Track);
      
    }
    return PostFavoriteTrack;
  };
  