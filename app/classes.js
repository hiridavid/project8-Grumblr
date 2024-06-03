class User {
  constructor(
    name,
    displayName = undefined,
    profilePictureURL = "/img/logo300.jpg",
    following = [],
    followers = [],
    likes = [],
    posts = []
  ) {
    this.name = name;

    if (displayName === undefined) this.displayName = name;
    else this.displayName = displayName;

    this.profilePictureURL = profilePictureURL;
    this.following = following;
    this.followers = followers;
    this.likes = likes;
    this.posts = posts;
    this.theme = [
      {
        label: "Background",
        colorHex: "#273329",
      },
      {
        label: "Post",
        colorHex: "#597E52",
      },
      {
        label: "Highlight",
        colorHex: "#C6A969",
      },
      {
        label: "Text",
        colorHex: "#FFFFEC",
      },
    ];
  }
}

class Post {
  constructor(
    username,
    cardText,
    cardTitle = "",
    tags = [],
    coverImageURL = "",
    postsArr = posts,
    usersArr = users
  ) {
    if (username === undefined)
      throw new Error("'username' missing or incorrect.");

    if (typeof username !== typeof "string")
      throw new TypeError("'username' must be a string.");

    if (cardText === undefined) throw new Error("'cardText' missing.");

    if (typeof cardText !== typeof "string")
      throw new TypeError("'cardText' must be a string.");

    let user = getUserObj(username, usersArr);
    if (user === undefined) throw new Error("User isn't registered.");

    this.coverImageURL = coverImageURL;
    this.cardTitle = cardTitle;
    this.cardText = cardText;
    this.tags = tags;
    this.profilePictureURL = user.profilePictureURL;
    this.username = username;
    this.likeCounter = 0;
    this.postID = postsArr[postsArr.length - 1].postID + 1;
  }
}

/* class Post {
  constructor(


    coverImageURL
    cardTitle = ""
    cardText
    tags = []
    profilePictureURL":"/img/pfp92x92.jpg","username":"gnome-1985","likeCounter":0,"postID":0
  ) {

  };
} */

export default {
  User,
  Post,
};
