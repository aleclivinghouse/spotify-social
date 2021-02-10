module.exports = (sequelize, DataTypes) => {
    const Track_Genre = sequelize.define('Track_Genre', {
      TrackId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      GenreId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {});
  
    Track_Genre.associate = function(models){
      Track_Genre.hasMany(models.Track);
      Track_Genre.hasMany(models.Genre);
    }
    return Track_Genre;
  };
  