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

//let themesObject { darkTheme{colors}, flowerTheme{colors}, etc }

//constructor function (9 hex codes) { return themesObject.themeObj{colors} }

//set theme
//input: name, color1, color2, etc -> constructor

//apply theme
//setcolorpalette(themesObject["theme"])

//now do all of it again without classes

let log = console.log;

function Cat() {}
let kitty = new Cat();
log(kitty);
log(kitty.constructor == Cat);
log(Cat.prototype.constructor);
