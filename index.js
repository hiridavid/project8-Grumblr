import express from "express";
import fs from "fs";
//import path from "path";
//import { fileURLToPath } from "url";

//init
const app = express();
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
const port = 3000;
const postsJSONPath = "./data/posts.json";
const themesJSONPath = "./data/themes.json";
let themes = JSON.parse(fs.readFileSync(themesJSONPath));

//--main page posts init
let onLoadPackage = JSON.parse(fs.readFileSync(postsJSONPath));

//middleware
app.use(express.static("public"));
//app.use("/", express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join("./public/scripts")));
app.use(express.urlencoded({ extended: true }));
//app.set("view engine", "ejs");

class Theme {
  constructor(
    main = "#597E52",
    mainSubtle = "#384935",
    alert = "#C6A969",
    alertSubtle = "#64522c",
    dark = "#273329",
    darkSubtle = "#161616",
    light = "#FFFFEC",
    highlight = "#F1E4C3",
    liked = "#dfa3a4"
  ) {
    this.main;
    this.mainSubtle;
    this.alert;
    this.alertSubtle;
    this.dark;
    this.darkSubtle;
    this.light;
    this.highlight;
    this.liked;
  }
  set() {
    setColorPalette(
      this.main,
      this.mainSubtle,
      this.alert,
      this.alertSubtle,
      this.dark,
      this.darkSubtle,
      this.light,
      this.highlight,
      this.liked
    );
  }
  get() {
    console.log(this);
  }
}

function addTheme(
  name,
  main = "#597E52",
  mainSubtle = "#384935",
  alert = "#C6A969",
  alertSubtle = "#64522c",
  dark = "#273329",
  darkSubtle = "#161616",
  light = "#FFFFEC",
  highlight = "#F1E4C3",
  liked = "#dfa3a4"
) {
  themes[name] = new Theme(
    main,
    mainSubtle,
    alert,
    alertSubtle,
    dark,
    darkSubtle,
    light,
    highlight,
    liked
  );
  fs.writeFileSync(themesJSONPath, JSON.stringify(themes));
  themes[name].get();
}

function setColorPalette(
  main = "#597E52",
  mainSubtle = "#384935",
  alert = "#C6A969",
  alertSubtle = "#64522c",
  dark = "#273329",
  darkSubtle = "#161616",
  light = "#FFFFEC",
  highlight = "#F1E4C3",
  liked = "#dfa3a4"
) {
  const palette = [
    main,
    mainSubtle,
    alert,
    alertSubtle,
    dark,
    darkSubtle,
    light,
    highlight,
    liked,
  ];
  const cssVariables = [
    "--c-main",
    "--c-main-subtle",
    "--c-alert",
    "--c-alert-subtle",
    "--c-dark",
    "--c-dark-subtle",
    "--c-light",
    "--c-highlight",
    "--c-liked",
  ];

  cssRoot = $(":root");

  for (let i = 0; i < cssVariables.length; i++) {
    cssRoot.css(cssVariables[i], palette[i]);
  }
}

//http
app.get("/", (req, res) => {
  //console.log(onLoadPackage);
  res.render("index.ejs", onLoadPackage);
  addTheme("default");
  themes.default.set();
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.get("/editor", (req, res) => {
  res.render("editor.ejs");
});

app.post("/", (req, res) => {
  res.render("index.ejs", onLoadPackage);
});

app.post("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.post("/editor", (req, res) => {
  res.render("editor.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
