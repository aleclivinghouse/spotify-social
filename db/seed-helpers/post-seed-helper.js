const faker = require("faker");
export const postSeedHelper = function(type){
    const post = {};
    switch (type) {
        case "fire_lyric":
          post.title = faker.lorem.words();
          post.type = "fire_lyric"
          post.text = faker.lorem.sentence();
          post.lyric_annotation = faker.lorem.sentence();
          post.would_recommend = null;
          post.rating = null;
          return post;
          break;
        case "favorite_songs_by_artist":
        post.title = faker.lorem.words();
        post.type = "favorite_songs_by_artist"
        post.text = faker.lorem.sentence();
        post.artistId = Math.floor(Math.random() * 5) + 1;
          break;
        case "recommend_a_track":
           day = "Tuesday";
          break;
        case "rate_an_album":
          day = "Wednesday";
          break;
        case "reccomend_an_artist":
         
      }
}