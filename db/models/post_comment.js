module.exports = (sequelize, DataTypes) => {
  const Post_Comment = sequelize.define('Post_Comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }   
  }, {});

  Post_Comment.associate = function(models){
    Post_Comment.hasMany(models.Comment_Like);
    Post_Comment.belongsTo(models.User, {foreignKey: "user_id"});
    Post_Comment.belongsTo(models.Post, {foreignKey: "post_id"});
  }
  return Post_Comment;
};
