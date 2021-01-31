module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      href: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {});

  Image.associate = function(models){
    Image.belongsTo(models.Artist, {foreignKey: "artist_id"});
    Image.belongsTo(models.Album, {foreignKey: "album_id"});
    Image.belongsTo(models.Track, {foreignKey: "track_id"});
    Image.belongsTo(models.Profile, {foreignKey: "profile_id"});
  }
  return Image;
};
