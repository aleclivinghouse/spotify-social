module.exports = (sequelize, DataTypes) => {
    const Artist_Genre = sequelize.define('Artist_Genre', {
      ArtistId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      GenreId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    Artist_Genre.associate = function(models){
      Artist_Genre.hasMany(models.Artist);
      Artist_Genre.hasMany(models.Genre);
    }
    return Artist_Genre;
  };
  