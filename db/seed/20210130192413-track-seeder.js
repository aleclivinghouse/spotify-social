const trackList = require("../seed-helpers/track-seed-helper").trackList;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let date = new Date();
    for(let i = 0; i <trackList.length; i++){
      data.push({
        id: trackList[i].id,
        title: trackList[i].name,
        track_number: trackList[i].track_number,
        href: trackList[i].href,
        popularity: trackList[i].popularity,
        external_url: trackList[i].external_urls.spotify,
        release_date: trackList[i].release_date,
        createdAt: date,
        updatedAt: date
      })
    }
    return  queryInterface.bulkInsert({tableName: "Tracks"}, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    down:  (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete({tableName: "Tracks"}, null, {});
    }
  }
};
