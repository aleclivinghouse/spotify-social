module.exports = (sequelize, DataTypes) => {
    const UserFavoriteGenre = sequelize.define('UserFavoriteGenre', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}

    }, {});
  
    UserFavoriteGenre.associate = function(models){
      UserFavoriteGenre.belongsTo(models.User);
      UserFavoriteGenre.belongsTo(models.Genre);
    }
    return UserFavoriteGenre;
  };
  