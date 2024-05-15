import fs from "fs";
//let themesObject { darkTheme{colors}, flowerTheme{colors}, etc }
let themes = JSON.parse(fs.readFileSync("./public/data/themes.json"));

//constructor function (9 hex codes) { return themesObject.themeObj{colors} }
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

//set theme
//input: name, color1, color2, etc -> constructor
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
  fs.writeFileSync("./public/data/themes.json", JSON.stringify(themes));
  themes[name].get();
}

//apply theme
//setcolorpalette(themesObject["theme"])
addTheme("morning");

//now do all of it again without classes

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

console.log("main.js executed successfully yayyy");
