'use strict';
const artistList = require("../seed-helpers/artist-seed-helper");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let date = new Date();
    for(let i = 1; i <artistList.length; i++){
      data.push({
        id: artistList[i].id,
        name: artistList[i].name,
        followersCount: artistList[i].followers.total,
        href: artistList[i].href,
        external_url: artistList[i].external_urls.spotify,
        createdAt: date,
        updatedAt: date
      })
    }
    return  queryInterface.bulkInsert({tableName: "artists"}, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    down:  (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete({tableName: "artists"}, null, {});
    }
  }
};
