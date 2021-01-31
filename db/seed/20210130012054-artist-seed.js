const artistList = require("../seed-helpers/artist-seed-helper").artistList;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let date = new Date();
    for(let i = 0; i <artistList.length; i++){
      data.push({
        id: artistList[i].id,
        name: artistList[i].name,
        followers_count: artistList[i].followers.total,
        href: artistList[i].href,
        external_url: artistList[i].external_urls.spotify,
        createdAt: date,
        updatedAt: date
      })
    }
    return  queryInterface.bulkInsert({tableName: "Artists"}, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    down:  (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete({tableName: "Artists"}, null, {});
    }
  }
};
