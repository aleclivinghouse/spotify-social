module.exports = (sequelize, DataTypes) => {
    const Album_Genre = sequelize.define('Album_Genre', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Album_Genre.associate = function(models){
      Album_Genre.belongsTo(models.Album);
      Album_Genre.belongsTo(models.Genre);
    }
    return Album_Genre;
  };
  