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
    const userFeeds = [];
    query.forEach((item) => {
      query.follower.forEach((follow) => {
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

  module.exports = {
      createFeeds,
      createFeed
  }