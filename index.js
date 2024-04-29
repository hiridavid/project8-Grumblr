import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.get("/editor", (req, res) => {
  res.render("editor.ejs");
});

app.post("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.post("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/editor", (req, res) => {
  res.render("editor.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
