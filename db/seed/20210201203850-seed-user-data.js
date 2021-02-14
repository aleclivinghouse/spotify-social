const faker = require("faker");
const artistList = require("../seed-helpers/artist-seed-helper").artistList;
const albumList = require("../seed-helpers/album-seed-helper").albumList;
const trackList = require("../seed-helpers/track-seed-helper").trackList;
const postSwitch = require("../seed-helpers/post-seed-switch").postSwitch;

function randomDate(){
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  var date1 = '01-01-2019'
  var date2 = new Date();
  date1 = new Date(date1).getTime()
  date2 = new Date(date2).getTime()
  if( date1>date2){
      return new Date(randomValueBetween(date2,date1));
  } else{
      return new Date(randomValueBetween(date1, date2));
  }
}

const createImages = (artists, albums, tracks) => {
  const images = [];
  artistList.forEach((a) => {
    let date = randomDate();
    const artistForId = artists.filter(artist => artist.spotify_id === a.id);
    const artistId = artistForId.id;
    console.log("this is the images ", a.images);
    const imageArray = a.images;
    if(imageArray){
    imageArray.forEach((image) => {
      console.log("this is the url ", image.url);
    if(image.url !== null){
      images.push({
        href: image.url,
        height: image.height,
        width: image.width,
        ArtistId: artistId,
        createdAt: date,
        updatedAt: date
      });
     }
    });
   }
  });

  albumList.forEach((a) => {
    let date = randomDate();
    const albumForId = albums.filter(album => album.spotify_id === a.id);
    const albumId = albumForId.id;
    const imageArray = a.images;
    console.log("this is the image array ", imageArray);
    if(imageArray){
    imageArray.forEach((image) => {
      console.log("this is the url ", image.url);
      if(image.url !== null){
      images.push({
        href: image.url,
        height: image.height,
        width: image.width,
        AlbumId: albumId,
        createdAt: date,
        updatedAt: date
      });
    }
    });
   }
  });

  return images;
}

const createArtists = () => {
  let data = [];
  let date = randomDate();
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
        let date = randomDate();
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
  let date = randomDate();
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
        preview_url: trackList[i].preview_url,
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
  for(let i = 0; i < 160; i++){
    let date = randomDate();
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

const createFavoriteTracksByAnArtistPost = (tracks, userIds) => {
  const posts = [];
  for(let i = 0; i < 25; i++){
    let date = randomDate();
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    const randomTrackIndex = Math.floor(Math.random() * tracks.length) + 1;
    const artist = tracks[randomTrackIndex-1].ArtistId;
    const user = userIds[randomUserIndex-1].id;
    posts.push({
      title:  faker.lorem.words(),
      text:  faker.lorem.sentence(),
      UserId: user,
      ArtistId: artist,
      createdAt: date,
      updatedAt: date
    })
  }
  return posts;
}


const createReposts = (posts, favoriteTracksByAnartistPosts, userIds) => {
  console.log("this is the posts in reposts ", posts);
  const theLength = Math.floor(posts.length/3);
  const reposts = [];
  for(let i = 0; i < theLength; i++){
    const randomType =  Math.floor(Math.random() * 4) + 1;
    let date = randomDate();
    const randomPostIndex = Math.floor(Math.random() * posts.length) + 1;
    const randomFavoriteTracksByAnArtistPostIndex = Math.floor(Math.random() * favoriteTracksByAnartistPosts.length) + 1;
    const post = posts[randomPostIndex-1];
    const randomFavoritePost = favoriteTracksByAnartistPosts[randomFavoriteTracksByAnArtistPostIndex-1].id;
    console.log("this is randomPost with randomPostIndex ", post);
    const otherUserIds = userIds.filter(item => item.id !== posts[randomPostIndex-1].UserId);
    const randomUserIndex = Math.floor(Math.random() * otherUserIds.length) + 1;
    if(randomType === 4){
      reposts.push({
        title:  faker.lorem.sentence(),
        text:  faker.lorem.sentence(),
        UserId: otherUserIds[randomUserIndex-1].id,
        PostId: posts[randomPostIndex-1].id,
        createdAt: date,
        updatedAt: date
      });
    } else {
      reposts.push({
        title:  faker.lorem.sentence(),
        text:  faker.lorem.sentence(),
        UserId: otherUserIds[randomUserIndex-1].id,
        FavoriteTracksByAnArtistPostId: randomFavoritePost.id,
        createdAt: date,
        updatedAt: date
      });
    }
  }
  return reposts;
}

const createComments = (posts, reposts, favoriteTracksByAnArtistPosts, userIds) => {
  console.log("first post in createComments ", posts[0]);
  console.log("first repost in createComments ", reposts[0]);
  console.log("first user in createComments ", userIds[0]);
  const theLength  = posts.length + reposts.length;
  const comments = [];
  for(let i = 0; i < theLength * 2; i++){
    let date = randomDate();
    const randomType =  Math.floor(Math.random() * 5) + 1;
    const randomPostIndex =  Math.floor(Math.random() * posts.length) + 1;
    const randomTracksByAnArtistPostIndex =  Math.floor(Math.random() * favoriteTracksByAnArtistPosts.length) + 1;
    const randomRepostIndex =  Math.floor(Math.random() * reposts.length) + 1;
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    if(randomType !== 3 && randomType !== 5){
      comments.push({
        text: faker.lorem.sentence(),
        UserId: userIds[randomUserIndex-1].id,
        PostId: posts[randomPostIndex-1].id,
        createdAt: date,
        updatedAt: date
      })
    }else if(randomType !== 5){
      comments.push({
        text: faker.lorem.sentence(),
        UserId: userIds[randomUserIndex-1].id,
        FavoriteTracksByAnArtistPostId: favoriteTracksByAnArtistPosts[randomTracksByAnArtistPostIndex-1].id,
        createdAt: date,
        updatedAt: date
      })
    }else {
      comments.push({
        text: faker.lorem.sentence(),
        UserId: userIds[randomUserIndex-1].id,
        RepostId: reposts[randomRepostIndex-1].id,
        createdAt: date,
        updatedAt: date
      })
    }
  }
  return comments;
}

const createPostLikes = (posts, reposts, favoriteTracksByAnArtistPosts, userIds) => {
  const theLength  = posts.length + reposts.length;
  const postLikes = [];
  for(let i = 0; i < theLength * 4; i++){
    let date = randomDate();
    const randomPostIndex =  Math.floor(Math.random() * posts.length) + 1;
    const randomRepostIndex =  Math.floor(Math.random() * reposts.length) + 1;
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    const randomTracksByAnArtistPostIndex =  Math.floor(Math.random() * favoriteTracksByAnArtistPosts.length) + 1;
    const randomType =  Math.floor(Math.random() * 5) + 1;
    if(randomType !== 3 && randomType !== 5){
      postLikes.push({
        UserId: userIds[randomUserIndex-1].id,
        PostId: posts[ randomPostIndex-1].id,
        createdAt: date,
        updatedAt: date
      })
    } else if(randomType !==5){
      postLikes.push({
        UserId: userIds[randomUserIndex-1].id,
        FavoriteTracksByAnArtistPostId: favoriteTracksByAnArtistPosts[randomTracksByAnArtistPostIndex-1].id,
        createdAt: date,
        updatedAt: date
      })
    } else {
      postLikes.push({
        UserId: userIds[randomUserIndex-1].id,
        RepostId: reposts[randomRepostIndex-1].id,
        createdAt: date,
        updatedAt: date
      })
    }
  }
  return postLikes;
}

const createCommentLikes = (comments, userIds) => {
  const commentLikes = [];
  for(let i = 0; i < comments.length * 2; i++){
    const randomCommentIndex =  Math.floor(Math.random() * comments.length) + 1;
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    let date = randomDate();
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
  for(let i = 1; i <= 25; i++){
    let date = randomDate();
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

const createPostTags = (posts, tags) => {
  const postTags = [];
  for(let i = 0; i < posts.length; i++){
    let shuffledTags = tags.sort(() => 0.5 - Math.random());
    let selected = shuffledTags.slice(0, 3);
    let date = randomDate();
    for(let j = 0; j < selected.length-1; j++){
      postTags.push({
        TagId: selected[j].id,
        PostId: posts[i].id,
        createdAt: date,
        updatedAt: date
      })
    }
  }
  return postTags;
}

const createPostFavoriteTracks = (favoriteTracksByAnArtistPosts, tracks) => {
  const postFavoriteTracks = [];
  for(let i = 0; i < favoriteTracksByAnArtistPosts.length; i++){
    console.log("iteration i", i);
    tracksFiltered = tracks.filter(item => item.ArtistId === favoriteTracksByAnArtistPosts[i].ArtistId);
    let shuffledTracks = tracksFiltered.sort(() => 0.5 - Math.random());
    let selected = shuffledTracks.slice(0, 2);
    for(let j = 0; j < selected.length-1; j++){
      console.log("iteration j", j);
      let date = randomDate();
      postFavoriteTracks.push({
        TrackId: selected[j].id,
        FavoriteTracksByAnArtistPostId: favoriteTracksByAnArtistPosts[i].id,
        createdAt: date,
        updatedAt: date
      })
    }
  }
  return postFavoriteTracks;
}

const createPostFavoriteTags = (favoriteTracksByAnArtistPosts, tags) => {
  const postFavoriteTags = [];
  for(let i = 0; i < favoriteTracksByAnArtistPosts.length; i++){
    let shuffledTags = tags.sort(() => 0.5 - Math.random());
    let selected = shuffledTags.slice(0, 2);
    for(let j = 0; j < selected.length-1; j++){
      console.log("iteration j", j);
      let date = randomDate();
      postFavoriteTags.push({
        TagId: selected[j].id,
        FavoriteTracksByAnArtistPostId: favoriteTracksByAnArtistPosts[i].id,
        createdAt: date,
        updatedAt: date
      })
    }
  }
  return postFavoriteTags;
}

const createFollows = (userIds) => {
  const follows = [];
  
  userIds.forEach((item, index) => {
    console.log("this is item ", item);
    let date = randomDate();
    const randomNumOfFollowers = Math.floor(Math.random() * 6) + 2;
    const otherUsers = userIds.filter(user => user.id !== item.id);
    const shuffledOtherUsers = otherUsers.sort(() => 0.5 - Math.random());
    const selected = shuffledOtherUsers.slice(0, randomNumOfFollowers);
    selected.forEach((select, selectIndex) => {
      console.log("this is select ", select);
      follows.push({
        followerId: select.id,
        being_followedId: item.id,
        createdAt: date,
        updatedAt: date
      });
    });
  });
  return follows;
}

const createTags = () => {
  const tags = [];
  for(let i = 0; i < 25; i++){
    let date = randomDate();
    tags.push({
      title: faker.hacker.adjective(),
      createdAt: date,
      updatedAt: date
    })
  }
  return tags;
}

const createProfiles = (userIds) => {
   const profiles = [];
    userIds.forEach((item, index) => {
      console.log("this is the item in profile forEach ", item);
      let date = randomDate();
      profiles.push({
        bio: faker.lorem.sentence(),
        cover_photo: "https://picsum.photos/500/800?random=1",
        thumb_nail: "https://picsum.photos/200/200?random=1",
        birth_date: date,
        createdAt: date,
        updatedAt: date,
        UserId: item.id
      })
    });
    return profiles;
}

const createPmThreads = (userIds) => {
  console.log("userIds in pm threads", userIds[0]);
  const pmThreads = [];
  for(let i = 0; i < userIds.length *3; i++){
    const randomUserIndex = Math.floor(Math.random() * userIds.length) + 1;
    let date = randomDate();
    pmThreads.push({
      title: faker.lorem.words(),
      createdAt: date,
      updatedAt: date
    })
  }
  return pmThreads;
}

const createMessages = (pmThreadMembers, pmThreads) => {
  const messages = [];
  //for each pm thread, create 5-8 messages from the pmThreads users
  pmThreads.forEach((pmThread) => {
   const theMembers = pmThreadMembers.filter(member => member.PmthreadId === pmThread.id);
   theMembers.forEach((member) => {
    let date = randomDate();
     messages.push({
      createdAt: date,
      updatedAt: date,
      text: faker.lorem.sentence(),
      PmthreadId: pmThread.id,
      UserId: member.UserId
     });
   });
  });
  return messages;
}
const findMutualFollows = (follows) => {
  const mutualFollows = [];
  follows.forEach((item) => {
    const otherFollows = follows.filter(follow => item.being_followedId !== follow.being_followedId &&  item.followerId !== follow.followerId);
    otherFollows.forEach((itemTwo) => {
      console.log("other follows fired ");
      const innerArray = [];
      if(item.being_followedId === itemTwo.followerId || item.followerId === itemTwo.being_followed){
          innerArray.push(item.being_followedId); 
          innerArray.push(item.followerId);
          const alreadyExists = checkIfAlreadyExists(mutualFollows, innerArray);
          if(alreadyExists === "false"){
            mutualFollows.push(innerArray);
          } else {
            console.log("already entered fired");
          }
        }
    })
  })
  console.log("this is mutual Follows at the end ", mutualFollows);
  return mutualFollows;
}

const checkIfAlreadyExists = (array, subArray) => {
  let map = new Map();
  let flag = "false";
  map.set(subArray[0], 1);
  map.set(subArray[1], 1);
  array.forEach((item) => {
    if(map.has(item[0])){
      flag = "true";
    }
    if(map.has(item[1])){
      flag = "true";
    }
  });
  return flag;
}

const createPmThreadMembers = (pmThreads, follows) => {
  console.log("PmThreadMembers firing ");
  const pmThreadMembers = [];
  const mutualFollowsArray = findMutualFollows(follows);
  let theLength;
  if(mutualFollowsArray.length < pmThreads.length){
    theLength = mutualFollowsArray.length;
  } else {
    theLength = pmThreads.length;
  }
  for(let i = 0; i < theLength; i++){
    console.log("this is user id in first pmThread members ", mutualFollowsArray[i][0]);
    console.log("this is user id in second pmThread members ", mutualFollowsArray[i][1]);
    let date = randomDate();
    pmThreadMembers.push({
      createdAt: date,
      updatedAt: date,
      PmthreadId: pmThreads[i].id,
      UserId: mutualFollowsArray[i][0]
    })
    pmThreadMembers.push({
      createdAt: date,
      updatedAt: date,
      PmthreadId: pmThreads[i].id,
      UserId: mutualFollowsArray[i][1]
    })
  }
  return pmThreadMembers;
}

const createUserFavoriteArtists = (userIds, artists) => {
  const userFavoriteArtists = [];
  userIds.forEach((user) => {
    const randomNumOfArtists = Math.floor(Math.random() * 3) + 2;
    const shuffleArtists = artists.sort(() => 0.5 - Math.random());
    const selected = shuffleArtists.slice(0, randomNumOfArtists);
    selected.forEach((artist) => {
      let date = randomDate();
      userFavoriteArtists.push({
        createdAt: date,
        updatedAt: date,
        ArtistId: artist.id,
        UserId: user.id
      });
    });
  });
  return userFavoriteArtists;
}

const createUserFavoriteTracks = (userIds, tracks) => {
  const userFavorite = [];
  userIds.forEach((user) => {
    const randomNumOfTracks = Math.floor(Math.random() * 3) + 2;
    const shuffleTracks = tracks.sort(() => 0.5 - Math.random());
    const selected = shuffleTracks.slice(0, randomNumOfTracks);
    selected.forEach((track) => {
      let date = randomDate();
      userFavorite.push({
        createdAt: date,
        updatedAt: date,
        TrackId: track.id,
        UserId: user.id
      });
    });
  });
  return userFavorite;
}

const createUserFavoriteAlbums = (userIds, albums) => {
  const userFavorite = [];
  userIds.forEach((user) => {
    const randomNumOfAlbums = Math.floor(Math.random() * 3) + 2;
    const shuffleAlbums = albums.sort(() => 0.5 - Math.random());
    const selected = shuffleAlbums.slice(0, randomNumOfAlbums);
    selected.forEach((album) => {
      let date = randomDate();
      userFavorite.push({
        createdAt: date,
        updatedAt: date,
        AlbumId: album.id,
        UserId: user.id
      });
    });
  });
  return userFavorite;
}


exports.up = async ( queryInterface, Sequelize ) => {
  
  const theUsers = await createUsers();
  const userIds = await queryInterface.bulkInsert({tableName: 'Users'}, theUsers, {returning: ['id']});
  console.log("these are the user ids: ", userIds);

  const profileDump = await createProfiles(userIds);
  const profiles = await queryInterface.bulkInsert({tableName: 'Profiles'}, profileDump, {returning: ['id', 'bio', 'birth_date']});
  console.log("these are the profiles ", profiles);

  //add the the artists, return their id and name
  const artistDump = await createArtists();
  const artists = await queryInterface.bulkInsert({tableName: 'Artists'}, artistDump, {returning: ['id', 'name']});

  const albumDump = await createAlbums(artists);
  const albums = await queryInterface.bulkInsert({tableName: 'Albums'}, albumDump, {returning: ['id', 'title', 'ArtistId', 'spotify_id']});

  const trackDump = await createTracks(albums);
  const tracks = await queryInterface.bulkInsert({tableName: 'Tracks'}, trackDump, {returning: ['id', 'title', 'ArtistId', 'AlbumId', 'spotify_id']});
 
  const postDump = await createPosts(tracks, userIds);
  let posts = await queryInterface.bulkInsert({tableName: 'Posts'}, postDump, {returning: ['id', 'UserId']});
  console.log(" these are the posts length ", posts.length);

  const favoriteTracksByAnArtistPostDump = await createFavoriteTracksByAnArtistPost(tracks, userIds);
  const favoriteTracksByAnArtistPosts = await queryInterface.bulkInsert({tableName: 'FavoriteTracksByAnArtistPosts'}, favoriteTracksByAnArtistPostDump, {returning: ['id', 'UserId', 'ArtistId']});

  const postFavoriteTracksDump = await createPostFavoriteTracks(favoriteTracksByAnArtistPosts, tracks);
  const postFavoriteTracks = await queryInterface.bulkInsert({tableName: 'PostFavoriteTracks'}, postFavoriteTracksDump, {returning: ['FavoriteTracksByAnArtistPostId', 'TrackId']});
  console.log("this is post favorite tracks ", postFavoriteTracks);

  const repostDump = await createReposts(posts, userIds, favoriteTracksByAnArtistPosts);
  const reposts = await queryInterface.bulkInsert({tableName: 'Reposts'}, repostDump, {returning: ['id', 'UserId']});
  console.log("these are the reposts ", reposts);
 
  const commentDump = await createComments(posts, reposts, favoriteTracksByAnArtistPosts, userIds);
  const comments = await queryInterface.bulkInsert({tableName: 'Postcomments'}, commentDump, {returning: ['id', 'UserId', 'PostId', 'text']});
  console.log("these are the comments:  ", comments);

  const postLikesDump = await createPostLikes(posts, reposts, favoriteTracksByAnArtistPosts, userIds);
  const postLikes = await queryInterface.bulkInsert({tableName: 'Postlikes'}, postLikesDump, {returning: ['id', 'UserId']});
  console.log("these are the post likes: ", postLikes);

  const commentLikesDump = await createCommentLikes(comments, userIds);
  const commentLikes = await queryInterface.bulkInsert({tableName: 'Commentlikes'}, commentLikesDump, {returning: ['id', 'UserId', 'PostcommentId']});

  const tagsDump = await createTags();
  let tags = await queryInterface.bulkInsert({tableName: 'Tags'}, tagsDump, {returning: ['id', 'title']});
  
  const postTagsDump = await createPostTags(posts, tags);
  const postTags = await queryInterface.bulkInsert({tableName: 'PostTags'}, postTagsDump, {returning: ['PostId', 'TagId']});
  const postFavoriteTagsDump = await createPostFavoriteTags(favoriteTracksByAnArtistPosts, tags);
  const postFavoriteTags = await queryInterface.bulkInsert({tableName: 'PostFavoriteTags'}, postFavoriteTagsDump , {returning: ['FavoriteTracksByAnArtistPostId', 'TagId']});

  const PmThreadDump = await createPmThreads(userIds);
  const pmThreads = await queryInterface.bulkInsert({tableName: 'Pmthreads'}, PmThreadDump, {returning: ['id']});

  const followsDump = await createFollows(userIds);
  const follows = await queryInterface.bulkInsert({tableName: 'Follows'}, followsDump, {returning: ['followerId', 'being_followedId']});
  // //we will do this once following and followers is seedeed
  const pmThreadMembersDump = await createPmThreadMembers(pmThreads, follows);
  const pmThreadMembers = await queryInterface.bulkInsert({tableName: 'PmThreadMembers'}, pmThreadMembersDump, {returning: ['PmthreadId', 'UserId']});

  const messagesDump = await createMessages(pmThreadMembers, pmThreads);
  const messages = await queryInterface.bulkInsert({tableName: 'Messages'}, messagesDump, {returning: ['id', 'UserId', 'text']});

  const userFavoriteArtistsDump = await createUserFavoriteArtists(userIds, artists);
  const userFavoriteArtists = await queryInterface.bulkInsert({tableName: 'UserFavoriteArtists'}, userFavoriteArtistsDump, {returning: ['UserId', 'ArtistId']});


  const userFavoriteTracksDump = await createUserFavoriteTracks(userIds, tracks);
  const userFavoriteTracks = await queryInterface.bulkInsert({tableName: 'UserFavoriteTracks'}, userFavoriteTracksDump, {returning: ['UserId', 'TrackId']});



  const userFavoriteAlbumsDump = await createUserFavoriteAlbums(userIds, albums);
  const userFavoriteAlbums = await queryInterface.bulkInsert({tableName: 'UserFavoriteAlbums'}, userFavoriteAlbumsDump, {returning: ['UserId', 'AlbumId']});
  console.log("user favorite albums ", userFavoriteAlbums);

  const imagesDump = await createImages(artists, albums, tracks);
  const images = await queryInterface.bulkInsert({tableName: 'Images'}, imagesDump, {returning: ['href', 'id', 'height', 'width']});
  console.log("these are the images ", images);

  
};

exports.down = async ( queryInterface ) => {
   await queryInterface.bulkDelete( 'Images', null, {} );
   await queryInterface.bulkDelete( 'UserFavoriteArtists', null, {} );
   await queryInterface.bulkDelete( 'UserFavoriteAlbums', null, {} );
   await queryInterface.bulkDelete( 'UserFavoriteTracks', null, {} );
   await queryInterface.bulkDelete( 'Messages', null, {} );
   await queryInterface.bulkDelete( 'Pmthreads', null, {} );
   await queryInterface.bulkDelete( 'Follows', null, {} );
   await queryInterface.bulkDelete( 'PmThreadMembers', null, {} );
   await queryInterface.bulkDelete( 'Tags', null, {} );
   await queryInterface.bulkDelete( 'PostTags', null, {} );
   await queryInterface.bulkDelete( 'Tags', null, {} );
   await queryInterface.bulkDelete( 'Profiles', null, {} );
   await queryInterface.bulkDelete( 'Commentlikes', null, {} );
   await queryInterface.bulkDelete( 'Postlikes', null, {} );
   await queryInterface.bulkDelete( 'Postcomments', null, {} );
   await queryInterface.bulkDelete( 'Reposts', null, {} );
   await queryInterface.bulkDelete( 'Posts', null, {} );
   await queryInterface.bulkDelete( 'FavoriteTracksByAnArtistPosts', null, {} );
   await queryInterface.bulkDelete( 'PostFavoriteTracks', null, {} );
   await queryInterface.bulkDelete( 'Users', null, {} );
   await queryInterface.bulkDelete( 'Tracks', null, {} );
   await queryInterface.bulkDelete( 'Albums', null, {} );
   await queryInterface.bulkDelete( 'Artists', null, {} );
}