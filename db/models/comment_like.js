module.exports = (sequelize, DataTypes) => {
  const Commentlike = sequelize.define('Commentlike', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false }    
  }, {});

    Commentlike.associate = function(models){
      Commentlike.belongsTo(models.Postcomment);
      Commentlike.belongsTo(models.User);
  }
  return Commentlike;
};
