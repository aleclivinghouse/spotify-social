module.exports = (sequelize, DataTypes) => {
    const Post_Favorite_Tag = sequelize.define('Post_Favorite_Tag', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Post_Favorite_Tag.associate = function(models){
      Post_Favorite_Tag.belongsTo(models.Favorite_Tracks_By_An_Artist_Post);
      Post_Favorite_Tag.belongsTo(models.Tag);
    }
    return Post_Favorite_Tag;
  };
  