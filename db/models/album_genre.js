module.exports = (sequelize, DataTypes) => {
    const Album_Genre = sequelize.define('Album_Genre', {
      AlbumId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      GenreId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    Album_Genre.associate = function(models){
      Album_Genre.hasMany(models.Album);
      Album_Genre.hasMany(models.Genre);
    }
    return Album_Genre;
  };
  