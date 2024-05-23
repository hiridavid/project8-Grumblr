import express from "express";
import fs from "fs";

//init
const app = express();
const port = 3000;

//--main page posts
let onLoadPackage = JSON.parse(fs.readFileSync("./data/posts.json"));

//--profile package


//--editor package
let editorPackage = {
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
};

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//http
app.get("/", (req, res) => {
  //console.log(onLoadPackage);
  res.render("index.ejs", onLoadPackage);
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
