import express from "express";
import fs from "fs";

//init
const app = express();
const port = 3000;
let currentUser = undefined;

//puts locals package together
class Locals {
  constructor(includePosts = true, includeThemes = true) {
    if (includePosts)
      this.posts = JSON.parse(fs.readFileSync("./data/posts.json")).posts;
    //if (includeThemes) this.themes = JSON.parse(fs.readFileSync("./data/themes.json")).themes;
  }

  print(target = "posts") {
    console.log(this[target]);
  }
}

//--main page posts
let onLoadPackage = JSON.parse(fs.readFileSync("./data/posts.json"));

//--editor package
let editorPackage = JSON.parse(fs.readFileSync("./data/themes.json"));
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

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//http
app.get("/", (req, res) => {
  res.render("index.ejs", onLoadPackage);
  //new Locals().print(); WORKS!
});

app.post("/", (req, res) => {
  res.render("index.ejs", onLoadPackage);
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs", onLoadPackage);
});

app.post("/profile", (req, res) => {
  res.render("profile.ejs", onLoadPackage);
});

app.get("/editor", (req, res) => {
  res.render("editor.ejs", editorPackage);
});

app.post("/editor", (req, res) => {
  res.render("editor.ejs", editorPackage);
});

app.post("/createPost", (req, res) => {
  console.log(req.body);
  res.status(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
