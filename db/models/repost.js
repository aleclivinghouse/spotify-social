module.exports = (sequelize, DataTypes) => {
  const Repost = sequelize.define('Repost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    feed_item: {type: DataTypes.STRING},
    title: {
        type: DataTypes.STRING,
      },
      text: {
        type: DataTypes.STRING
      }
  }, {});

  Repost.associate = function(models){
    Repost.belongsTo(models.Post);
    Repost.belongsTo(models.User);
    Repost.hasMany(models.Postcomment);
    Repost.hasMany(models.Postlike);
    Repost.belongsTo(models.FavoriteTracksByAnArtistPost);
  }
  return Repost;
};
