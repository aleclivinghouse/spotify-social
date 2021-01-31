module.exports = (sequelize, DataTypes) => {
  const Repost = sequelize.define('Repost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lyric_annotation: {
        type: DataTypes.STRING,
        allowNull: true
      },
      would_recommend: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      rating: {
        type: DataTypes.DECIMAL(10, 1),
        allowNull: true
      }
  }, {});

  Repost.associate = function(models){
    Repost.belongsTo(models.Post);
    Repost.belongsTo(models.User)
  }
  return Repost;
};
