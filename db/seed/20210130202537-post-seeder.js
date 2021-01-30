'use strict';
const faker = require("faker");
const postSeedHelper = require("../seed-helpers/post-seed-helper");

module.exports = {
  up: (queryInterface, Sequelize) => {
      const data = [];
      const type_Array = ["fire_lyric", "recommend_a_track", "rate_an_album", "recommend_an_artist", "favorite_tracks_by_artist"];
      for(let i = 1; i <= 200; i++){
        if(i%5===0){
          const thePost = postSeedHelper("favorite_tracks_by_artist");
          data.push(thePost);
        } else {
        const random = Math.floor(Math.random() * 5) + 1;
        data.push(thePost);
        }
      }
      return  queryInterface.bulkInsert({tableName: "posts"}, data, {});
  },

  down:  (queryInterface, Sequelize) => {
    return  queryInterface.bulkDelete({tableName: "posts"}, null, {});
  }
};