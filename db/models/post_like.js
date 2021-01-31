module.exports = (sequelize, DataTypes) => {
  const Post_Like = sequelize.define('Post_Like', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false }    
  }, {});

  Post_Like.associate = function(models){
    Post_Like.belongsTo(models.Post, {foreignKey: "post_id"});
    Post_Like.belongsTo(models.User, {foreignKey: "user_id"}); 
  }
  return Post_Like;
};
