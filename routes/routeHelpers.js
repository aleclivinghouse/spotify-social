 const createFeed = (query) => {
    const userFeed = [];
      query.follower.forEach((follow) => {
        console.log("this is the posts now: ", ...follow.being_followed.Posts);
        console.log("this is the postComment now: ", ...follow.being_followed.Postcomments);
        console.log("this is the commentLike now: ", ...follow.being_followed.Commentlikes);
        userFeed.push(
            ...follow.being_followed.Posts, 
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

const createProfilePageData = (query) => {
    const profileObj = {};
    const activity = [];
    profileObj.profile = query.Profile;
    profileObj.UserFavoriteAlbums = query.UserFavoriteAlbums;
    profileObj.UserFavoriteArtists = query.UserFavoriteArtists;
    profileObj.UserFavoriteTracks = query.UserFavoriteTracks;
    activity.push(
        ...query.Posts, 
        ...query.Postcomments, 
        ...query.Postlikes, 
        ...query.Commentlikes,
        ...query.FavoriteTracksByAnArtistPosts,
        ...query.Reposts
        );
    const sorted = activity.sort((a,b) => {
        var dateA = new Date(a.createdAt).getTime(); 
        var dateB = new Date(b.createdAt).getTime(); 
        return dateA < dateB ? 1 : -1; 
    });
    profileObj.activityFeed = sorted;
    console.log("this is the activity feed at the end ", profileObj.activityFeed);
    return profileObj;
}

  module.exports = {
    createFeed,
    createProfilePageData
  }