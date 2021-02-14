module.exports = (sequelize, DataTypes) => {
    const TrackGenre = sequelize.define('TrackGenre', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    }, {});
  
    TrackGenre.associate = function(models){
      TrackGenre.belongsTo(models.Track);
      TrackGenre.belongsTo(models.Genre);
    }
    return TrackGenre;
  };
  