const artistList = require("../seed-helpers/artist-seed-helper");

const genreList = [];

for(let artist of artistList){
    genreArr.push(...artist.genres);
}

module.exports = {genreList};