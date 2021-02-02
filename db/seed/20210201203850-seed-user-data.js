
const artistList = require("../seed-helpers/artist-seed-helper").artistList;
const albumList = require("../seed-helpers/album-seed-helper").albumList;
const trackList = require("../seed-helpers/track-seed-helper").trackList;
const postSwitch = require("../seed-helpers/post-seed-switch").postSwitch;


//this is the dummy data we need
//get 8 albums by 6 artists
//to do this call this api manually ten times with the name of the album
//get-search-item/?q=in%20utero&type=album&market=&limit=1&offset=&include_external=

//for each album, get all the albums tracks
//get the ids from the album call, and enter them manually 
//https://api.spotify.com/v1/albums/{id}/tracks

//then for each album, get the albums artist
//enter the id of each artist 
///v1/artists/{id}

const createTrackArtistAlbum = (trackList) => {
  const tracks = [];
  const albums = [];
  const artists = [];
  for(let i = 0; i < trackList.length; i++){
    tracks.push({
      spotify_id: trackList[i].id,
      title: trackList[i].name,
      track_number: trackList[i].track_number,
      href: trackList[i].href,
      popularity: trackList[i].popularity,
      external_url: trackList[i].external_urls.spotify,
      release_date: trackList[i].release_date,
      // album_id: trackList[i].album.id,
      // post_id: randomPost,
      createdAt: date,
      updatedAt: date
    });
    for(let j= 0; j < albumList.length; j++){
      //tracklist album matches the album name push the album
      if(albumList[j].id === trackList[i].album.id){
        albums.push({
          spotify_id: albumList[i].id,
          title: albumList[i].name,
          album_type: albumList[i].album_type,
          external_url: albumList[i].external_urls.spotify,
          release_date: albumList[i].release_date,
          href: albumList[i].href,
          createdAt: date,
          updatedAt: date
        });
      }
    } //album for end

    for(let m=0; m < artistList.length; m++){
      if(artistList[m].id === trackList[j].artists.id){
        artists.push({
          spotify_id: trackList[i].id,
          name: artistList[i].name,
          followers_count: artistList[i].followers.total,
          href: artistList[i].href,
          external_url: artistList[i].external_urls.spotify,
          createdAt: date,
          updatedAt: date

        });
      }
    }
  }
  const returnObj = {};
  returnObj.artists = artists;
  returnObj.albums = albums;
  returnObj.tracks = tracks;
  return returnObj;
}

const createPosts = (userIds, artistIds, albumIds, trackIds) => {
  const types = ["fire_lyric", "recommend_a_track",  "rate_an_album", "recommend_an_artist"];
  for(let i = 0; i < 250; i++){
    const randomType = Math.floor(Math.random() * 4) + 1;
    const randomUser = Math.floor(Math.random() * userIds.length) + 1;
    const randomTrack = Math.floor(Math.random() * trackIds.length) + 1;
    const randomAlbum = Math.floor(Math.random() * albumIds.length) + 1;
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
  console.log("these are the user ids: ", userIds);
  const userIds = await queryInterface.bulkInsert({tableName: 'Users'}, theUsers, {returning: ['id']});
  const spotifyObj = await createTrackArtistAlbum(trackList);
  const artistIds = await queryInterface.bulkInsert({tableName: 'Artists'}, spotifyObj.artists, {returning: ['id']});
  const albumIds = await queryInterface.bulkInsert({tableName: 'Albums'}, spotifyObj.albums, {returning: ['id']});
  const trackIds = await queryInterface.bulkInsert({tableName: 'Tracks'}, spotifyObj.tracks, {returning: ['id']});
};

exports.down = async ( queryInterface ) => {
   await queryInterface.bulkDelete( 'Users', null, {} );
   await queryInterface.bulkDelete( 'Artist', null, {} );
   await queryInterface.bulkDelete( 'Albums', null, {} );
   await queryInterface.bulkDelete( 'Tracks', null, {} );
}