module.exports = (sequelize, DataTypes) => {
    const Favorite_Tracks_By_An_Artist_Post = sequelize.define('Favorite_Tracks_By_An_Artist_Post', {
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
  
      Favorite_Tracks_By_An_Artist_Post.associate = function(models){
      Favorite_Tracks_By_An_Artist_Post.belongsTo(models.Artist);
      Favorite_Tracks_By_An_Artist_Post.belongsTo(models.User);
      Favorite_Tracks_By_An_Artist_Post.hasMany(models.Track);
      Favorite_Tracks_By_An_Artist_Post.hasMany(models.Postcomment);
      Favorite_Tracks_By_An_Artist_Post.hasMany(models.Postlike);
      Favorite_Tracks_By_An_Artist_Post.belongsToMany(models.Tag, { through: 'Post_Favorite_Tags'});
    }
    return Favorite_Tracks_By_An_Artist_Post;
  };
  