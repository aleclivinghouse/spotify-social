'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
      let data = [];
      let random;
      let alreadyAdded = [];
      let date = new Date();
      for(let i = 1; i <= 50; i++){
        for(let j = 0; j < 25; j++)
        random = Math.floor(Math.random() * 50) + 1;
        if(random === i){
          random = random+1;
        }
        if(!alreadyAdded.includes(random)){
        data.push({
          friendOneId: i,
          friendTwoId: random,
          createdAt: date,
          updatedAt: date
        })
        alreadyAdded.push(i);
      }
    }
    console.log("here are the friends being seeded ", data);
      return queryInterface.bulkInsert({tableName: "friends"}, data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete({tableName: "friends"}, null);
  }
};