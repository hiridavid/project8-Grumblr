import express from "express";

const app = express();
const port = 3000;

let indexPackage = {
  posts: [
    {
      coverImageURL:
        "https://static.vecteezy.com/system/resources/previews/035/799/001/non_2x/ai-generated-tranquil-garden-scene-with-a-variety-of-colorful-flowers-in-bloom-generative-by-ai-photo.jpg",
      cardTitle: "LOOK AT MY GARDEN 🥰🥰🥰",
      cardText:
        "honestly im so lucky my husband made this garden for me overnight and i dont know how i could possibly deserve his love 🥹🥹🥹👉👈",
      tags: ["gardens", "lovemyhusband", "flowers", "iiiiiiiiiiiii"],
      profilePictureURL: "img/pfp462x640.jpg",
      username: "gnome-1985",
      liked: false,
      likeCounter: ~~(Math.random() * 1000 + 1000),
    },
    {
      coverImageURL:
        "https://img.freepik.com/premium-photo/dark-tunnel-with-light-top_445983-10152.jpg",
      cardTitle: "I HATE THE MINES SO MUCH",
      cardText:
        "ITS ALL JUST DIRT AND STONE AND SMOKE AND COAL AND DEBRIS AND SAND AND DIRT AND DAMPNESS AND ANTS AND DIRT AND SWEAT AND WORK AND MEN AND DIRT AN",
      tags: ["HATETHEMINES", "HATEMINES", "MINEHATERS", "hateposting"],
      profilePictureURL:
        "https://img.atlasobscura.com/toSoOVA87YqDCQzma3FRoO2dKER6QkxicsOWaEsCGkA/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy85Nzk3YTZiZC03/NTI4LTRjNjItYjZj/MC0wYjkwMDM3M2Yw/NzhhNzA3YTNiYzY2/YWVlMDYzNzhfR2lt/bGkgaW4gVEhFIExP/UkQgT0YgVEhFIFJJ/TkdTX1RIRSBUV08g/VE9XRVJTX1JZQ0sx/OC5qcGc.jpg",
      username: "minehater29",
      liked: true,
      likeCounter: ~~(Math.random() * 30 + 20),
    },
    {
      coverImageURL: "https://picsum.photos/600/400",
      cardTitle: "I HATE THE MINES SO MUCH",
      cardText:
        "ITS ALL JUST DIRT AND STONE AND SMOKE AND COAL AND DEBRIS AND SAND AND DIRT AND DAMPNESS AND ANTS AND DIRT AND SWEAT AND WORK AND MEN AND DIRT AN",
      tags: ["HATETHEMINES", "HATEMINES", "MINEHATERS", "hateposting"],
      profilePictureURL:
        "https://img.atlasobscura.com/toSoOVA87YqDCQzma3FRoO2dKER6QkxicsOWaEsCGkA/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy85Nzk3YTZiZC03/NTI4LTRjNjItYjZj/MC0wYjkwMDM3M2Yw/NzhhNzA3YTNiYzY2/YWVlMDYzNzhfR2lt/bGkgaW4gVEhFIExP/UkQgT0YgVEhFIFJJ/TkdTX1RIRSBUV08g/VE9XRVJTX1JZQ0sx/OC5qcGc.jpg",
      username: "minehater29",
      liked: true,
      likeCounter: ~~(Math.random() * 30 + 20),
    },
  ],
};

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", indexPackage);
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.get("/editor", (req, res) => {
  res.render("editor.ejs");
});

app.post("/", (req, res) => {
  res.render("index.ejs", indexPackage);
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
