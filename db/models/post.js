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
    Post.belongsTo(models.Artist);
    Post.belongsTo(models.User);
    Post.belongsTo(models.Album);
    Post.belongsTo(models.Track);
    Post.hasMany(models.PostTag);
    Post.hasMany(models.Postcomment);
    Post.hasMany(models.Postlike);
    // Post.belongsToMany(models.Tag, { through: 'Post_Tags'});
  }
  return Post;
};
