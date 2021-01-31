module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lyric_annotation: {
        type: DataTypes.STRING,
        allowNull: true
      },
      would_recommend: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      rating: {
        type: DataTypes.DECIMAL(10, 1),
      }
        
  }, {});

  Post.associate = function(models){
    Post.belongsTo(models.Artist, { foreignKey: 'artist_id' });
    Post.belongsTo(models.User, { foreignKey: 'user_id' });
    Post.belongsTo(models.Album, { foreignKey: 'album_id' });
    Post.belongsTo(models.Track, { as: "Recommend_Track", foreignKey: 'track_id' });
    Post.belongsToMany(models.Track, { as: "By_Artist", through: 'Favorite_Tracks_By_An_Artist_Post', foreignKey: 'track_id' });
    Post.hasMany(models.Post_Comment);
    Post.hasMany(models.Post_Like);
    Post.belongsToMany(models.Tag, { through: 'Post_Tags', foreignKey: 'tag_id' });
  }
  return Post;
};
