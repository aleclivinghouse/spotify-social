const createFeeds = (query) => {
    const userFeeds = [];
    query.forEach((item) => {
      item.follower.forEach((follow) => {
        const userFeed = [];
        userFeed.push(...follow.being_followed.Posts, ...follow.being_followed.Postcomments, ...follow.being_followed.Commentlikes, ...follow.being_followed.Postlikes);
        userFeed.sort((a, b) => {
          return a.createdAt - b.createdAt;
        });
        userFeeds.push(userFeed);
      });
    })
    return userFeeds;
  }


  const createFeed = (query) => {
    const userFeed = [];
      query.follower.forEach((follow) => {
        console.log("this is the posts now: ", ...follow.being_followed.Posts);
        console.log("this is the postComment now: ", ...follow.being_followed.Postcomments);
        console.log("this is the commentLike now: ", ...follow.being_followed.Commentlikes);
        userFeed.push(...follow.being_followed.Posts, 
            ...follow.being_followed.Postcomments, 
            ...follow.being_followed.Commentlikes, 
            ...follow.being_followed.Postlikes,
            ...follow.being_followed.Reposts,
            ...follow.being_followed.FavoriteTracksByAnArtistPosts,
            );
      });
      const sorted = userFeed.sort((a,b) => {
        var dateA = new Date(a.createdAt).getTime(); 
        var dateB = new Date(b.createdAt).getTime(); 
        return dateA < dateB ? 1 : -1; 
      })
    console.log("this is the user feed at the end ", userFeed);
    return sorted;
  }

  module.exports = {
      createFeeds,
      createFeed
  }