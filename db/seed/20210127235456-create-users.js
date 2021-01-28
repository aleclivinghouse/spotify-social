'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
      let data = [];
      let date = new Date();
      for(let i = 1; i <= 50; i++){
        data.push({
          display_name: `testuser${i+1}`,
          email: `testuser${i+1}@test.com`,
          password: "$2a$10$tN/fYtm.fo3k1hMQPcJLN.Lt20lzu2FSH.FomaQh3ce9/xJnv4QDS",
          country: "US",
          createdAt: date,
          updatedAt: date
        })
      }
      return  queryInterface.bulkInsert({tableName: "users"}, data, {});
  },

  down:  (queryInterface, Sequelize) => {
    return  queryInterface.bulkDelete({tableName: "users"}, null, {});
  }
};