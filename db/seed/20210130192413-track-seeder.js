const trackList = require("../seed-helpers/track-seed-helper").trackList;
module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let date = new Date();
    for(let i = 0; i <trackList.length; i++){
      const randomPost = Math.floor(Math.random() * 200) + 1;
      data.push({
        title: trackList[i].name,
        track_number: trackList[i].track_number,
        href: trackList[i].href,
        popularity: trackList[i].popularity,
        external_url: trackList[i].external_urls.spotify,
        release_date: trackList[i].release_date,
        // album_id: trackList[i].album.id,
        // post_id: randomPost,
        createdAt: date,
        updatedAt: date
      })
    }
    return  queryInterface.bulkInsert({tableName: "Tracks"}, data, {});
  },

  down: (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete({tableName: "Tracks"}, null, {});
  }
};
