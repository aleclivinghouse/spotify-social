module.exports = (sequelize, DataTypes) => {
    const Post_Favorite_Track = sequelize.define('Post_Favorite_Track', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Post_Favorite_Track.associate = function(models){
      Post_Favorite_Track.belongsTo(models.Favorite_Tracks_By_An_Artist_Post);
      Post_Favorite_Track.belongsTo(models.Track);
      
    }
    return Post_Favorite_Track;
  };
  