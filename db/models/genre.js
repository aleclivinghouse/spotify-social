module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {});

  Genre.associate = function(models){
    // Genre.belongsToMany(models.User, { through: 'User_Favorite_Genres'});
    // Genre.belongsToMany(models.Artist, { through: 'Artist_Genres'});
    // Genre.belongsToMany(models.Track,{ through: 'Track_Genres' });
    // Genre.belongsToMany(models.Album, { through: 'Album_Genres'});
    Genre.hasMany(models.User_Favorite_Genre);
    Genre.hasMany(models.Artist_Genre);
    Genre.hasMany(models.Track_Genre);
    Genre.hasMany(models.Album_Genre);
  }
  return Genre;
};
