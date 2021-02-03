const faker = require("faker");
const artistList = require("../seed-helpers/artist-seed-helper").artistList;
const albumList = require("../seed-helpers/album-seed-helper").albumList;
const trackList = require("../seed-helpers/track-seed-helper").trackList;
const postSwitch = require("../seed-helpers/post-seed-switch").postSwitch;

const createArtists = () => {
  let data = [];
  let date = new Date();
  const artists = [];
  for(let i=0; i < artistList.length; i++){
      artists.push({
        spotify_id: artistList[i].id,
        name: artistList[i].name,
        followers_count: artistList[i].followers.total,
        href: artistList[i].href,
        external_url: artistList[i].external_urls.spotify,
        createdAt: date,
        updatedAt: date
      });
  }
  return artists;
}
const findId = (objList, name) => {
  for(let obj of objList){
    if(obj.name === name){
      return obj.id;
    }
  }
}

const findIdTwo = (objList, trackAlbumId) => {
  let newObj = {};
  for(let obj of objList){
    if(trackAlbumId === obj.spotify_id){
      newObj.albumId = obj.id;
      newObj.artistId = obj.ArtistId;
    }
  }
  return newObj;
}


const createAlbums = (artistObj) => {
  const albums = [];
  for(let i=0; i < albumList.length; i++){
    for(let j=0; j < artistList.length; j++){
      if(albumList[i].artists[0].name === artistList[j].name){
        let date = new Date();
        const artistId = findId(artistObj, artistList[j].name);
        albums.push({
          spotify_id: albumList[i].id,
          title: albumList[i].name,
          album_type: albumList[i].album_type,
          external_url: albumList[i].external_urls.spotify,
          release_date: albumList[i].release_date,
          href: albumList[i].href,
          ArtistId: artistId,
          createdAt: date,
          updatedAt: date
        });
      }
    }
  }
  return albums;
}

const createTracks = (albumObj) => {
  const tracks = [];
  let date = new Date();
  for(let i=0; i < trackList.length; i++){
    //if the track album_id matches the albumObj id
    //add the track with the id and the artist id
    const popularity = Math.floor(Math.random() * 500) + 50;
    const idObj = findIdTwo(albumObj, trackList[i].album_id);
    tracks.push({
        spotify_id: trackList[i].id,
        title: trackList[i].name,
        track_number: trackList[i].track_number,
        href: trackList[i].href,
        popularity: popularity,
        external_url: trackList[i].external_urls.spotify,
        release_date: trackList[i].release_date,
        ArtistId: idObj.artistId,
        AlbumId: idObj.albumId,
        createdAt: date,
        updatedAt: date
    })
  }
  return tracks;
}


const createPosts = (tracks, userIds) => {
  console.log("this is the tracks in create posts ", tracks);
  const types = ["fire_lyric", "recommend_a_track",  "rate_an_album", "recommend_an_artist"];
  const posts = [];
  for(let i = 0; i < 250; i++){
    let date = new Date();
    const randomTypeIndex = Math.floor(Math.random() * types.length) + 1;
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    const randomTrackIndex = Math.floor(Math.random() * tracks.length) + 1;
    const type = types[randomTypeIndex-1];
    const track = tracks[randomTrackIndex-1];
    console.log("this is the track with the random index ", track);
    const user = userIds[randomUserIndex-1].id;
     //once we get the track we need to get the artist and album associated with that track
    let thePost = postSwitch(type, track, user);
    thePost.createdAt = date;
    thePost.updatedAt = date;
    console.log("this is the post before it gets pushed ", thePost);
    posts.push(thePost);
  }
  return posts;
}

const createComments = (posts, userIds) => {
  const comments = [];
  for(let i = 0; i < posts.length * 4; i++){
    const randomPostIndex =  Math.floor(Math.random() * posts.length) + 1;
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    let date = new Date();
    comments.push({
      text: faker.lorem.sentence(),
      UserId: userIds[randomUserIndex-1].id,
      PostId: posts[randomPostIndex-1].id,
      createdAt: date,
      updatedAt: date
    })
  }
  return comments;
}

const createPostLikes = (posts, userIds) => {
  const postLikes = [];
  for(let i = 0; i < posts.length * 4; i++){
    const randomPostIndex =  Math.floor(Math.random() * posts.length) + 1;
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    let date = new Date();
    postLikes.push({
      UserId: userIds[randomUserIndex-1].id,
      PostId: posts[ randomPostIndex-1].id,
      createdAt: date,
      updatedAt: date
    })
  }
  return postLikes;
}

const createCommentLikes = (comments, userIds) => {
  const commentLikes = [];
  for(let i = 0; i < comments.length * 2; i++){
    const randomCommentIndex =  Math.floor(Math.random() * comments.length) + 1;
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    let date = new Date();
    commentLikes.push({
      UserId: userIds[randomUserIndex-1].id,
      PostcommentId: comments[ randomCommentIndex-1].id,
      createdAt: date,
      updatedAt: date
    })
  }
  return commentLikes;
}

const createUsers = () => {
  let data = [];
  for(let i = 1; i <= 50; i++){
    let date = new Date();
    data.push({
      display_name: `testuser${i}`,
      email: `testuser${i}@test.com`,
      password: "$2a$10$tN/fYtm.fo3k1hMQPcJLN.Lt20lzu2FSH.FomaQh3ce9/xJnv4QDS",
      country: "US",
      createdAt: date,
      updatedAt: date
    });
  }
  return data;
}

exports.up = async ( queryInterface, Sequelize ) => {
  
  const theUsers = await createUsers();
  const userIds = await queryInterface.bulkInsert({tableName: 'Users'}, theUsers, {returning: ['id']});
  console.log("these are the user ids: ", userIds);

  //add the the artists, return their id and name
  const artistDump = await createArtists();
  const artists = await queryInterface.bulkInsert({tableName: 'Artists'}, artistDump, {returning: ['id', 'name']});

  const albumDump = await createAlbums(artists);
  const albums = await queryInterface.bulkInsert({tableName: 'Albums'}, albumDump, {returning: ['id', 'title', 'ArtistId', 'spotify_id']});

  const trackDump = await createTracks(albums);
  const tracks = await queryInterface.bulkInsert({tableName: 'Tracks'}, trackDump, {returning: ['id', 'title', 'ArtistId', 'AlbumId', 'spotify_id']});
 
  const postDump = await createPosts(tracks, userIds);
  const posts = await queryInterface.bulkInsert({tableName: 'Posts'}, postDump, {returning: ['id', 'UserId']});
 
  const commentDump = await createComments(posts, userIds);
  const comments = await queryInterface.bulkInsert({tableName: 'Postcomments'}, commentDump, {returning: ['id', 'UserId', 'PostId', 'text']});
  console.log("these are the comments:  ", comments);
  console.log("its breaking after post comments ")

  const postLikesDump = await createPostLikes(posts, userIds);
  const postLikes = await queryInterface.bulkInsert({tableName: 'Postlikes'}, postLikesDump, {returning: ['id', 'UserId', 'PostId']});
  console.log("these are the post likes: ", postLikes);
  console.log("its breaking after post comments ")


  const commentLikesDump = await createCommentLikes(comments, userIds);
  const commentLikes = await queryInterface.bulkInsert({tableName: 'Commentlikes'}, commentLikesDump, {returning: ['id', 'UserId', 'PostcommentId']});
  console.log("these are the comment likes ", commentLikes);
  // //add the albums, return their id and name
  // const albumIds = await queryInterface.bulkInsert({tableName: 'Albums'}, spotifyObj.albums, {returning: ['id', 'name']});
  // console.log("these are the tracks")

  // const trackIds = await queryInterface.bulkInsert({tableName: 'Tracks'}, spotifyObj.tracks, {returning: ['id', 'AlbumId', 'ArtistId']});
};

exports.down = async ( queryInterface ) => {
  await queryInterface.bulkDelete( 'Commentlikes', null, {} );
   await queryInterface.bulkDelete( 'Postlikes', null, {} );
   await queryInterface.bulkDelete( 'Postcomments', null, {} );
   await queryInterface.bulkDelete( 'Posts', null, {} );
   await queryInterface.bulkDelete( 'Users', null, {} );
   await queryInterface.bulkDelete( 'Tracks', null, {} );
   await queryInterface.bulkDelete( 'Albums', null, {} );
   await queryInterface.bulkDelete( 'Artists', null, {} );
}