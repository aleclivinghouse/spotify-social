const trackList = require("../seed-helpers/track-seed-helper");
const artistList = require("../seed-helpers/artist-seed-helper");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let date = new Date();

    
    // //this loop represents the users
    // //for every user we need to add a few favorite tracks by an artist
    for(let i = 1; i < 50; i++){
        let trackCount = 0;
        //number of posts for each user
        for(let j = 0; j < 3; j++){
            const randomT = Math.floor(Math.random() * 3) + 1;
            const randomA = Math.floor(Math.random() * artistList.length) + 1;
            const randomB = Math.floor(Math.random() * artistList.length) + 1;
            let trackCount = 0;
            for(let m = 0; m < trackList.length; m+=5){
                if(trackCount < randomT && artistList[j].id === trackList[m].artists[0].id){
                    if(trackList[m].artists[0].id === artistList[randomA-1].id || artistList[randomB-1].id){
                    data.push({
                        userId: i,
                        artistId: trackList[m].artists[0].id,
                        trackId: trackList[m].id,
                        postId: m,
                        createdAt: date,
                        updatedAt: date
                      })
                      trackCount++;
                    }
                }
            }
        }
    }
    return  queryInterface.bulkInsert({tableName: "Artist_Tracks"}, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    down:  (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete({tableName: "Artist_Tracks"}, null, {});
    }
  }
};
