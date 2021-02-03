
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


const createPosts = (userIds, artistIds, albumIds, trackIds) => {
  const types = ["fire_lyric", "recommend_a_track",  "rate_an_album", "recommend_an_artist"];
  for(let i = 0; i < 250; i++){
    const randomTypeIndex = Math.floor(Math.random() * types.length) + 1;
    const type = types[randomTypeIndex];
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    const randomTrackIndex = Math.floor(Math.random() * trackIds.length) + 1;
    const track = trackIds[rendomTrackIndex];
     //once we get the track we need to get the artist and album associated with that track

    const randomAlbumIndex = Math.floor(Math.random() * albumIds.length) + 1;

  }
}

const createUsers = () => {
  let data = [];
  let date = new Date();
  for(let i = 1; i <= 50; i++){
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
  console.log("these are the artists ", artists);
  const albumDump = await createAlbums(artists);
  const albums = await queryInterface.bulkInsert({tableName: 'Albums'}, albumDump, {returning: ['id', 'title', 'ArtistId', 'spotify_id']});
  console.log("these are the albums ", albums);
  const trackDump = await createTracks(albums);
  const tracks = await queryInterface.bulkInsert({tableName: 'Tracks'}, trackDump, {returning: ['id', 'title', 'ArtistId', 'AlbumId', 'spotify_id']});
  console.log("these are the tracks ", tracks);


  // //add the albums, return their id and name
  // const albumIds = await queryInterface.bulkInsert({tableName: 'Albums'}, spotifyObj.albums, {returning: ['id', 'name']});
  // console.log("these are the tracks")

  // const trackIds = await queryInterface.bulkInsert({tableName: 'Tracks'}, spotifyObj.tracks, {returning: ['id', 'AlbumId', 'ArtistId']});
};

exports.down = async ( queryInterface ) => {
   await queryInterface.bulkDelete( 'Users', null, {} );
   await queryInterface.bulkDelete( 'Tracks', null, {} );
   await queryInterface.bulkDelete( 'Albums', null, {} );
   await queryInterface.bulkDelete( 'Artists', null, {} );
}