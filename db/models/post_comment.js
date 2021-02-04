module.exports = (sequelize, DataTypes) => {
  const Postcomment = sequelize.define('Postcomment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }   
  }, {});

  Postcomment.associate = function(models){
    Postcomment.hasMany(models.Commentlike);
    Postcomment.belongsTo(models.User);
    Postcomment.belongsTo(models.Post);
    Postcomment.belongsTo(models.Repost);
  }
  return Postcomment;
};
