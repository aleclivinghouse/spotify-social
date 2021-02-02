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
    Notification.belongsTo(models.User);
    Notification.belongsTo(models.User);
  }
  return Notification;
};

