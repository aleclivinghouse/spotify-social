module.exports = (sequelize, DataTypes) => {
    const Post_Favorite_Track = sequelize.define('Post_Favorite_Track', {
      TrackId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      Favorite_Tracks_By_An_Artist_PostId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    Post_Favorite_Track.associate = function(models){
      Post_Favorite_Track.hasMany(models.Favorite_Tracks_By_An_Artist_Post);
      Post_Favorite_Track.hasMany(models.Track);
      
    }
    return Post_Favorite_Track;
  };
  