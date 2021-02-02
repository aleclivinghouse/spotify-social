module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cover_photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thumb_nail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birth_date: {
      type: DataTypes.DATE
    }

  }, {});

  Profile.associate = function(models){
    Profile.belongsTo(models.User);
    Profile.hasMany(models.Image);
  }
  return Profile;
};
