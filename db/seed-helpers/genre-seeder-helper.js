const artistList = require("../seed-helpers/artist-seed-helper");

const genreList = [];

for(let artist of artistList){
    genreArr.push(...genres);
}

module.exports = {genreList};