module.exports = (sequelize, DataTypes) => {
    const ArtistGenre = sequelize.define('ArtistGenre', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    ArtistGenre.associate = function(models){
      ArtistGenre.belongsTo(models.Artist);
      ArtistGenre.belongsTo(models.Genre);
    }
    return ArtistGenre;
  };
  