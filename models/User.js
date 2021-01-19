const Sequelize = require('sequelize');
const db = require('../config/database');

// Create Schema
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

User.sync().then(() => {
  console.log(' user table created');
});
module.exports = User;
