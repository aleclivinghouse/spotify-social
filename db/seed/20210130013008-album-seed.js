const albumList = require("../seed-helpers/album-seed-helper").albumList;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let date = new Date();
    for(let i = 0; i <albumList.length; i++){
      data.push({
        id: albumList[i].id,
        title: albumList[i].name,
        album_type: albumList[i].album_type,
        external_url: albumList[i].external_urls.spotify,
        release_date: albumList[i].release_date,
        href: albumList[i].href,
        createdAt: date,
        updatedAt: date
      })
    }
    return  queryInterface.bulkInsert({tableName: "Albums"}, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    down:  (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete({tableName: "Albums"}, null, {});
    }
  }
};
