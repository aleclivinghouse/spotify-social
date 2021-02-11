module.exports = (sequelize, DataTypes) => {
    const Track_Genre = sequelize.define('Track_Genre', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Track_Genre.associate = function(models){
      Track_Genre.belongsTo(models.Track);
      Track_Genre.belongsTo(models.Genre);
    }
    return Track_Genre;
  };
  