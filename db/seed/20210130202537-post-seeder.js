const faker = require("faker");
const postSeedHelper = require("../seed-helpers/post-seed-helper").postSwitch;

module.exports = {
  up: (queryInterface, Sequelize) => {
      const data = [];
      const type_Array = ["fire_lyric", "recommend_a_track", "rate_an_album", "recommend_an_artist"];
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
        const thePost = {};
        thePost.text = faker.lorem.sentence();
        thePost.title = faker.lorem.sentence();
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
