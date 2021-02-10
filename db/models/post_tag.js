module.exports = (sequelize, DataTypes) => {
    const Post_Tag = sequelize.define('Post_Tag', {
      TagId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      PostId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    Post_Tag.associate = function(models){
      Post_Tag.hasMany(models.Post);
      Post_Tag.hasMany(models.Tag);
    }
    return Post_Tag;
  };
  