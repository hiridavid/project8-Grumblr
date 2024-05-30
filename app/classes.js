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

export default {
  User,
};
