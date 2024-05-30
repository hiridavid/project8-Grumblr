import express from "express";
import fs from "fs";
import filters from "./app/filters.js"

//deconstructing
const {
  getUserObj,
  getUserPosts,
  getUserTheme,
  getPostByID,
  getFilteredPosts,
  getPreparedPosts,
} = filters;

//init
const app = express();
const port = 3000;
let users = JSON.parse(fs.readFileSync("./data/users.json")).users;
let posts = JSON.parse(fs.readFileSync("./data/posts.json")).posts;
let currentUser = "gnome-1985";
let currentPfpURL = "img/pfp92x92.jpg";






//functions


//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
/* app.use("/", (req, res, next)=>{
  
  next();
}); */

//http
app.get("/", (req, res) => {
  const indexLocals = {
    currentUser: currentUser,
    currentPfpURL: currentPfpURL,
    posts: getPreparedPosts(posts, currentUser, users),
  };

  res.render("index.ejs", indexLocals);
  res.status(200).end();
});

app.get("/u/:username", (req, res) => {
  const username = req.params.username;
  const profileLocals = {
    currentUser: currentUser,
    currentPfpURL: currentPfpURL,
    user: getUserObj(username, users),
    posts: getPreparedPosts(getUserPosts(username, posts), currentUser, users),
    myProfile: currentUser === username,
  }

  res.render("profile.ejs", profileLocals);
  res.status(200).end();
});

/* app.post("/", (req, res) => {
  res.render("index.ejs", onLoadPackage);
}); */

/* app.get("/profile", (req, res) => {
  res.render("profile.ejs", onLoadPackage);
}); */

/* app.post("/profile", (req, res) => {
  let profileLocals = onLoadPackage;
  profileLocals.user = users.find((user) => {
    return user.name === req.body.currentUser;
  });

  res.render("profile.ejs", profileLocals);
}); */

/* app.get("/editor", (req, res) => {
  res.render("editor.ejs", editorPackage);
});

app.post("/editor", (req, res) => {
  res.render("editor.ejs", editorPackage);
}); */

/* app.post("/createPost", (req, res) => {
  console.log(req.body);
  res.status(200);
}); */



/* users.forEach((user) => {
  app.get(`/u/${user.name}`, (req, res) => {
    onLoadPackage.user = user;
    res.render("profile.ejs", onLoadPackage);
  });
}); */


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


//puts locals package together
/* class Locals {
  constructor(includePosts = true, includeThemes = true) {
    if (includePosts)
      this.posts = JSON.parse(fs.readFileSync("./data/posts.json")).posts;
    //if (includeThemes) this.themes = JSON.parse(fs.readFileSync("./data/themes.json")).themes;
  }

  print(target = "posts") {
    console.log(this[target]);
  }
} */

//--main page posts
/* let onLoadPackage = 
onLoadPackage.currentUser = currentUser; */

//--editor package
//let editorPackage = JSON.parse(fs.readFileSync("./data/themes.json"));
/* {
  colorPicker: [
    {
      label: "Background",
      currentColorHex: "#273329",
      currentColorVar: "--c-dark",
    },
    {
      label: "Post",
      currentColorHex: "#597E52",
      currentColorVar: "--c-main",
    },
    {
      label: "Accents",
      currentColorHex: "#C6A969",
      currentColorVar: "--c-alert",
    },
    {
      label: "Text",
      currentColorHex: "#FFFFEC",
      currentColorVar: "--c-light",
    },
  ],
  posts: {
    profilePictureURL: "img/pfp92x92.jpg",
    username: "gnome-1985",
    liked: false,
    likeCounter: 1,
  },
}; */

//API for rendering with included dependencies
//--!! onLoadPackage is taken from global, not the http response that called Page
//--!! res is not defined
/* const Page = {

  home: ["index.ejs", onLoadPackage],
  profile: ["profile.ejs", onLoadPackage],
  editor: ["editor.ejs", editorPackage],
  

  load ( target = "home" ) {
    res.render( this[target][0], this[target][1] );
  }
} */