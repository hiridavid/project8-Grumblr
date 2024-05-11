import express from "express";
import fs from "fs";

//init
const app = express();
const port = 3000;

//--main page posts init
let onLoadPackage = JSON.parse(fs.readFileSync("./data/posts.json"));

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//http
app.get("/", (req, res) => {
  //console.log(onLoadPackage);
  res.render("index.ejs", onLoadPackage);
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
