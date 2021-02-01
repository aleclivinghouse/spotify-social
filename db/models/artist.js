module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
        },
    href: {
          type: DataTypes.STRING,
          allowNull: true
     },
     external_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
     followers_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

    Artist.associate = function(models){
      Artist.belongsToMany(models.User, { through: 'User_Favorite_Artists'});
      Artist.belongsToMany(models.Album, { through: 'Album_Artists'});
      Artist.belongsToMany(models.Track, { through: 'Artist_Tracks'});
      Artist.belongsToMany(models.Genre, { through: 'Artist_Genres'});
      Artist.hasMany(models.Post);
      Artist.hasMany(models.Image);
  }
  return Artist;
};
