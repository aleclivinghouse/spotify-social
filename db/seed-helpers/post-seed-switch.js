const faker = require("faker");
const postSwitch = function(type, postId, artistId, albumId, trackId){
    const post = {};
    switch (type) {
        case "fire_lyric":
          post.title = faker.lorem.words();
          post.type = "fire_lyric"
          post.text = faker.lorem.sentence();
          post.lyric_annotation = faker.lorem.sentence();
          post.would_recommend = null;
          post.rating = null;
          post.ArtistId = artistId;
          return post;
          break;
        case "recommend_a_track":
          post.title = faker.lorem.words();
          post.type = "recommend_a_track"
          post.text = faker.lorem.sentence();
          post.TrackId = trackId;
          post.AlbumId = albumId;
          post.ArtistId = artistId;
          return post;
          break;
        case "rate_an_album":
          post.title = faker.lorem.words();
          post.type = "rate_an_album"
          post.text = faker.lorem.sentence();
          post.rating = faker.random.number({min: 1, max: 10, precision: 0.1});
          post.would_reccomend = faker.random.boolean();
          post.AlbumId = albumId;
          post.ArtistId = artistId;
          return post;
          break;
        case "recommend_an_artist":
          post.title = faker.lorem.words();
          post.type = "recommend_an_artist"
          post.text = faker.lorem.sentence();
          post.ArtistId = artistId;
          return post;
          break;
      }
}

module.exports = {postSwitch};