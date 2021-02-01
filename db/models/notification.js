module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    text: {
    type: DataTypes.STRING,
    allowNull: false
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: true
      },
    href: {
    type: DataTypes.STRING,
    allowNull: true
    }
  }, {});

  Notification.associate = function(models){
    Notification.belongsTo(models.User, {as: "user_notified", foreignKey: "user_notified_id"});
    Notification.belongsTo(models.User, {as: "user_mentioned", foreignKey: "user_mentioned_id"});
  }
  return Notification;
};

