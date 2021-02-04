module.exports = (sequelize, DataTypes) => {
  const Postlike = sequelize.define('Postlike', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false }    
  }, {});

  Postlike.associate = function(models){
    Postlike.belongsTo(models.Post);
    Postlike.belongsTo(models.User); 
    Postlike.belongsTo(models.Repost); 
  }
  return Postlike;
};
