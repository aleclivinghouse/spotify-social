const faker = require("faker");
const postSwitch = function(type, track, user){
  console.log("this is the track in the switch ", track);
    const post = {};
    switch (type) {
        case "fire_lyric":
          post.title = faker.lorem.words();
          post.feed_item = "post_fire_lyric",
          post.type = "fire_lyric"
          post.text = faker.lorem.sentence();
          post.lyric_annotation = faker.lorem.sentence();
          post.would_recommend = null;
          post.rating = null;
          post.ArtistId = track.ArtistId;
          post.UserId = user;
          return post;
          break;
        case "recommend_a_track":
          post.title = faker.lorem.words();
          post.feed_item = "post_recommend_a_track",
          post.type = "recommend_a_track"
          post.text = faker.lorem.sentence();
          post.TrackId = track.id;
          post.AlbumId = track.AlbumId;
          post.ArtistId = track.ArtistId;
          post.UserId = user;
          return post;
          break;
        case "rate_an_album":
          post.title = faker.lorem.words();
          post.feed_item = "post_rate_an_album",
          post.type = "rate_an_album"
          post.text = faker.lorem.sentence();
          post.rating = faker.random.number({min: 1, max: 10, precision: 0.1});
          post.would_recommend = faker.random.boolean();
          post.AlbumId = track.AlbumId;
          post.ArtistId = track.ArtistId;
          post.UserId = user;
          return  post;
          break;
        case "recommend_an_artist":
          post.title = faker.lorem.words();
          post.feed_item = "recommend_an_artist",
          post.type = "recommend_an_artist",
          post.text = faker.lorem.sentence();
          post.ArtistId = track.ArtistId;
          post.UserId = user;
          return post;
          break;
      }
}

module.exports = {postSwitch};