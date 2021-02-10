module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    spotify_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
      Artist.hasMany(models.Album);
      Artist.hasMany(models.Track);
      Artist.belongsTo(User_Favorite_Artist);
      Artist.belongsTo(Artist_Genre);
      Artist.belongsToMany(models.Genre, { through: 'Artist_Genres'});
      Artist.hasMany(models.Post);
      Artist.hasMany(models.Image);
  }
  return Artist;
};
