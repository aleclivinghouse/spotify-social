const faker = require("faker");
const artistList = require("../seed-helpers/artist-seed-helper");
const trackList = require("../seed-helpers/track-seed-helper");
const albumList = require("../seed-helpers/track-seed-helper");
const postSwitch = function(type){
    const post = {};
    switch (type) {
        case "fire_lyric":
          post.title = faker.lorem.words();
          post.type = "fire_lyric"
          post.text = faker.lorem.sentence();
          post.lyric_annotation = faker.lorem.sentence();
          post.would_recommend = null;
          post.rating = null;
          post.track_id = Math.floor(Math.random() * 5) + 1;
          return post;
          break;
        case "favorite_tracks_by_artist":
        post.title = faker.lorem.words();
        post.type = "favorite_tracks_by_artist"
        post.text = faker.lorem.sentence();
        post.artist_id = Math.floor(Math.random() * 5) + 1;
          return post;
          break;
        case "recommend_a_track":
            post.title = faker.lorem.words();
            post.type = "recommend_a_track"
            post.text = faker.lorem.sentence();
            post.track_id = Math.floor(Math.random() * 70) + 1;
          return post;
          break;
        case "rate_an_album":
            post.title = faker.lorem.words();
            post.type = "rate_an_album"
            post.text = faker.lorem.sentence();
            post.album_id = Math.floor(Math.random() * 5) + 1;
            return post;
            break;
        case "recommend_an_artist":
            post.title = faker.lorem.words();
            post.type = "recommend_an_artist"
            post.text = faker.lorem.sentence();
            post.artist_id = Math.floor(Math.random() * 8) + 1;
            return post;
            break;
      }
}

module.exports = {postSwitch};