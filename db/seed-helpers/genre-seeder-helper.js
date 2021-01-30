const artistList = require("../seed-helpers/artist-seed-helper");

const genreArr = [];

for(let artist of artistList){
    genreArr.push(...genres);
}

module.exports = genreArr;