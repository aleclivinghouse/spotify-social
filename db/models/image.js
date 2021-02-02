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
    Image.belongsTo(models.Artist);
    Image.belongsTo(models.Album);
    Image.belongsTo(models.Track);
    Image.belongsTo(models.Profile);
  }
  return Image;
};
