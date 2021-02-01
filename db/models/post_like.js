module.exports = (sequelize, DataTypes) => {
  const Postlike = sequelize.define('Postlike', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false }    
  }, {});

  Postlike.associate = function(models){
    Postlike.belongsTo(models.Post, {foreignKey: "post_id"});
    Postlike.belongsTo(models.User, {foreignKey: "user_id"}); 
  }
  return Postlike;
};
