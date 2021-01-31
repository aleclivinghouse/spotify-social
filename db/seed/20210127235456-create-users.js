const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
      let data = [];
      let date = new Date();
      for(let i = 1; i <= 250; i++){
        data.push({
          display_name: `testuser${i}`,
          email: `testuser${i}@test.com`,
          password: "$2a$10$tN/fYtm.fo3k1hMQPcJLN.Lt20lzu2FSH.FomaQh3ce9/xJnv4QDS",
          country: "US",
          createdAt: date,
          updatedAt: date
        })
      }
      return  queryInterface.bulkInsert({tableName: "Users"}, data, {});
  },

  down:  (queryInterface, Sequelize) => {
    return  queryInterface.bulkDelete({tableName: "Users"}, null, {});
  }
};