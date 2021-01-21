const Sequelize = require('sequelize');
const db = require('../config/database');

// Create Schema
const User = db.define('user', {
  display_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  external_url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  spotify_id: {
    type: Sequelize.STRING,
    allowNull: true
  },
  spotify_uri: {
    type: Sequelize.STRING,
    allowNull: true
  },
  followersCount: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

User.sync({force: true}).then(() => {
  console.log(' user table created');
});
module.exports = User;
