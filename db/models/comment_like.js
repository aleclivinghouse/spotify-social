module.exports = (sequelize, DataTypes) => {
  const Comment_Like = sequelize.define('Comment_Like', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false }    
  }, {});

    Comment_Like.associate = function(models){
      Comment_Like.belongsTo(models.Post_Comment, {foreignKey: "post_comment_id"});
      Comment_Like.belongsTo(models.User), {foreignKey: "user_id"};
  }
  return Comment_Like;
};
