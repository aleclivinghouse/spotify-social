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
        const userFeed = [];
        console.log("this is the posts now: ", ...follow.being_followed.Posts);
        console.log("this is the postComment now: ", ...follow.being_followed.Postcomments);
        console.log("this is the commentLike now: ", ...follow.being_followed.Commentlikes);
        userFeed.push(...follow.being_followed.Posts, ...follow.being_followed.Postcomments, ...follow.being_followed.Commentlikes, ...follow.being_followed.Postlikes);
      });
      userFeed.sort((a, b) => {
        return a.createdAt - b.createdAt;
      });
    return userFeed;
  }

  module.exports = {
      createFeeds,
      createFeed
  }