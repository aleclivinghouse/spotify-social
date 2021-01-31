const faker = require("faker");
const postSeedHelper = require("../seed-helpers/post-seed-helper").postSwitch;

module.exports = {
  up: (queryInterface, Sequelize) => {
      const data = [];
      const type_Array = ["fire_lyric", "recommend_a_track", "rate_an_album", "recommend_an_artist", "favorite_tracks_by_artist"];
      for(let i = 1; i <= 200; i++){
        const randomUserId = Math.floor(Math.random() * 250) + 1  
        let date = new Date();
        // if(i%5===0){
        //   const thePost = postSeedHelper("favorite_tracks_by_artist");
        //   thePost.user_id = randomUserId;
        //   thePost.createdAt = date;
        //   thePost.updatedAt = date;
        //   data.push(thePost);
        // } else {
        const random = Math.floor(Math.random() * 5) + 1;
        thePost = postSeedHelper(type_Array[random-1]);
        thePost.user_id = randomUserId;
        thePost.createdAt = date;
        thePost.updatedAt = date;
        data.push(thePost);
        // }
      }
      return  queryInterface.bulkInsert({tableName: "Posts"}, data, {});
  },

  down:  (queryInterface, Sequelize) => {
    return  queryInterface.bulkDelete({tableName: "Posts"}, null, {});
  }
};