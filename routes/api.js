const app = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");

app.get("/api/notes", function (req, res) {
  db = JSON.parse(fs.readFileSync("./db/db.json")) || [];
  res.json(db);
});

app.post("/api/notes", function (req, res) {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random() * 999),
  };
  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});

app.delete("/api/notes/:id", function (req, res) {
  let tempArray = db.filter((element) => element.id != req.params.id);
  console.log("delete", tempArray);
  db = tempArray;
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});

app.get("/api/notes/:id", function (req, res) {
  let tempArray = db.filter((element) => element.id != req.params.id);
  console.log("delete", tempArray);

  res.json(tempArray);
});
module.exports = app;
