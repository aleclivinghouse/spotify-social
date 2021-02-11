module.exports = (sequelize, DataTypes) => {
    const Post_Tag = sequelize.define('Post_Tag', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Post_Tag.associate = function(models){
      Post_Tag.belongsTo(models.Post);
      Post_Tag.belongsTo(models.Tag);
    }
    return Post_Tag;
  };
  