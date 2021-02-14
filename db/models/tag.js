module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {});

  Tag.associate = function(models){
    Tag.belongsTo(models.PostTag);
    // Tag.belongsToMany(models.Post,{ through: 'Post_Tags'});
    // Tag.belongsToMany(models.Favorite_Tracks_By_An_Artist_Post,{ through: 'Post_Favorite_Tags'});
    Tag.hasMany(models.PostFavoriteTag);
    Tag.hasMany(models.PostTag);
  }
  return Tag;
};
