module.exports = (sequelize, DataTypes) => {
    const PostTag = sequelize.define('PostTag', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    PostTag.associate = function(models){
      PostTag.belongsTo(models.Post);
      PostTag.belongsTo(models.Tag);
    }
    return PostTag;
  };
  