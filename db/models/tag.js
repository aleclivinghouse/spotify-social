module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {});

  Tag.associate = function(models){
    Tag.belongsToMany(models.Post,{ through: 'Post_Tags', foreignKey: "post_id" });
  }
  return Tag;
};
