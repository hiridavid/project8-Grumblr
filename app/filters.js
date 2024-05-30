//--(username) -> user object
function getUserObj(username = currentUser, usersArr = users) {
  return usersArr.filter((user) => user.name === username)[0];
}

//--(username) -> user's posts
function getUserPosts(username = currentUser, postsArr = posts) {
  return postsArr.filter((post) => post.username === username);
}

//--(username) -> user theme[]
function getUserTheme(username = currentUser, usersArr = users) {
  return getUserObj(username, usersArr).theme;
}

//--(ID) -> post with that ID
function getPostByID(ID, postsArr = posts) {
  for (let i = 0; i < postsArr.length; i++) {
    const post = postsArr[i];
    if (post.postID === ID) return post;
  }
}

//--(search string) -> search result posts
function getFilteredPosts(searchText, postsArr = posts) {
  searchText.toLowerCase();
  let searchWords = searchText.split(" ");

  return postsArr.filter((post) => {
    if (post.tags.includes(searchText)) return true;
    if (post.cardTitle.toLowerCase().includes(searchText)) return true;
    if (post.cardText.toLowerCase().includes(searchText)) return true;
    if (post.username === searchText) return true;

    for (let i = 0; i < searchWords.length; i++) {
      const word = searchWords[i];

      if (post.tags.includes(word)) return true;
      if (post.cardTitle.toLowerCase().includes(word)) return true;
      if (post.cardText.toLowerCase().includes(word)) return true;
      if (post.username === word) return true;
    }

    return false;
  });
}

//--(username) -> posts ready for shipping
function getPreparedPosts(
  postsArr = posts,
  username = currentUser,
  usersArr = users
) {
  let user = getUserObj(username, usersArr);
  let posts = structuredClone(postsArr);

  posts.forEach((post) => {
    post.liked = user.likes.includes(post.postID);
    post.following = user.following.includes(post.username);
  });

  return posts;
}

export default {
  getUserObj,
  getUserPosts,
  getUserTheme,
  getPostByID,
  getFilteredPosts,
  getPreparedPosts,
};
