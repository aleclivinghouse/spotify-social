module.exports = (sequelize, DataTypes) => {
    const AlbumGenre = sequelize.define('AlbumGenre', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    AlbumGenre.associate = function(models){
      AlbumGenre.belongsTo(models.Album);
      AlbumGenre.belongsTo(models.Genre);
    }
    return AlbumGenre;
  };
  