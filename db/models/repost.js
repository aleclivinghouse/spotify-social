module.exports = (sequelize, DataTypes) => {
  const Repost = sequelize.define('Repost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {
        type: DataTypes.STRING,
      },
      text: {
        type: DataTypes.STRING
      }
  }, {});

  Repost.associate = function(models){
    Repost.belongsTo(models.Post);
    Repost.belongsTo(models.User)
  }
  return Repost;
};
