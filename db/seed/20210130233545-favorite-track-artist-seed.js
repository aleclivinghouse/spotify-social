'use strict';
const trackList = require("../seed-helpers/track-seed-helper").trackList;
const artistList = require("../seed-helpers/artist-seed-helper").artistList;
module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    // //this loop represents the users
    // //for every user we need to add a few favorite tracks by an artist
    // for(let i = 1; i < 50; i++){
    //     let trackCount = 0;
    //     //number of posts for each user
    //     for(let j = 0; j < 3; j++){
    //         const randomT = Math.floor(Math.random() * 3) + 1;
    //         const randomA = Math.floor(Math.random() * artistList.length) + 1;
    //         const randomB = Math.floor(Math.random() * artistList.length) + 1;
    //         let trackCount = 0;
    //         for(let m = 0; m < trackList.length; m+=5){
    //           console.log("third for firing");
    //         if(trackList[m].artists[0].id !== "undefined" && artistList[randomA-1].id !== "undefined" && artistList[randomB-1].id !== "undefined"){
    //             if(trackCount < randomT && artistList[j].id === trackList[m].artists[0].id){
    //                 if(trackList[m].artists[0].id === artistList[randomA-1].id || trackList[m].artists[0].id === artistList[randomB-1].id){
    //                 let date = new Date();
    //                 data.push({
    //                     userId: i,
    //                     artistId: trackList[m].artists[0].id,
    //                     trackId: trackList[m].id,
    //                     postId: m,
    //                     createdAt: date,
    //                     updatedAt: date
    //                   });
    //                   trackCount++;
    //                 }
    //               }
    //            }
    //         }
    //     }
    // }
    return  queryInterface.bulkInsert({tableName: "Favorite_Tracks_By_An_Artist_Post"}, data, {});
  },

    down:  (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete({tableName: "Favorite_Tracks_By_An_Artist_Post"}, null, {});
  }
};
