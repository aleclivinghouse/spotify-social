module.exports = (sequelize, DataTypes) => {
    const Post_Favorite_Tag = sequelize.define('Post_Favorite_Tag', {
      TrackId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      Favorite_Tracks_By_An_Artist_PostId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    Post_Favorite_Tag.associate = function(models){
      Post_Favorite_Tag.hasMany(models.Favorite_Tracks_By_An_Artist_Post);
      Post_Favorite_Tag.hasMany(models.Tag);
    }
    return Post_Favorite_Tag;
  };
  