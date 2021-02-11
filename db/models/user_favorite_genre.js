module.exports = (sequelize, DataTypes) => {
    const User_Favorite_Genre = sequelize.define('User_Favorite_Genre', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}

    }, {});
  
    User_Favorite_Genre.associate = function(models){
      User_Favorite_Genre.belongsTo(models.User);
      User_Favorite_Genre.belongsTo(models.Genre);
    }
    return User_Favorite_Genre;
  };
  