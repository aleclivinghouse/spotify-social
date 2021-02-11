module.exports = (sequelize, DataTypes) => {
    const Artist_Genre = sequelize.define('Artist_Genre', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    Artist_Genre.associate = function(models){
      Artist_Genre.belongsTo(models.Artist);
      Artist_Genre.belongsTo(models.Genre);
    }
    return Artist_Genre;
  };
  