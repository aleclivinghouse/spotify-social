module.exports = (sequelize, DataTypes) => {
    const  FavoriteTracksByAnArtistPost = sequelize.define('FavoriteTracksByAnArtistPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        text: {
          type: DataTypes.STRING,
          allowNull: false
        }  
    }, {});
  
      FavoriteTracksByAnArtistPost.associate = function(models){
      FavoriteTracksByAnArtistPost.belongsTo(models.Artist);
      FavoriteTracksByAnArtistPost.belongsTo(models.User);
      FavoriteTracksByAnArtistPost.hasMany(models.PostFavoriteTrack);
      FavoriteTracksByAnArtistPost.hasMany(models.PostFavoriteTag);
      FavoriteTracksByAnArtistPost.hasMany(models.Postcomment);
      FavoriteTracksByAnArtistPost.hasMany(models.Postlike);
      // Favorite_Tracks_By_An_Artist_Post.belongsToMany(models.Track, { through: 'Post_Favorite_Tracks'});
      // Favorite_Tracks_By_An_Artist_Post.belongsToMany(models.Tag, { through: 'Post_Favorite_Tags'});
    }
    return FavoriteTracksByAnArtistPost;
  };
  