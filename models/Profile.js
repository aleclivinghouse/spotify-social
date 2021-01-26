// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const User = require('./User');

// // Create Schema
// const Profile = db.define('Profile', {
//   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
//   bio: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   coverPhoto: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   Thumbnail: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   birthDate: {
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.NOW
//   }
// });

// Profile.hasOne(User);


// Profile.sync({alter: true}).then(() => {
//   console.log('profile table created');
// });
// module.exports = Profile;
