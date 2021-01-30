'use strict';


const trackList = require("../seed-helpers/track-seed-helper");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let date = new Date();
    for(let i = 1; i <artistList.length; i++){
      data.push({
        id: trackList[i].id,
        title: trackList[i].name,
        track_number: trackList[i].followers.total,
        href: trackList[i].href,
        popularity: trackList[i].popularity,
        external_url: trackList[i].external_urls.spotify,
        releaseDate: trackList[i].release_date,
        createdAt: date,
        updatedAt: date
      })
    }
    return  queryInterface.bulkInsert({tableName: "tracks"}, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    down:  (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete({tableName: "tracks"}, null, {});
    }
  }
};
