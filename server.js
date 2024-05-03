const express = require("express");
const app = express();
const PORT = process.envPORT || 3001;
const path = require("path");
const noteData = require("./db/db.json");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => res.send("directs to index.html"));

app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.get("/api/notes", (req, res) => res.send(noteData));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

app.post("/api/notes", (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  const id = uuidv4();
  const newNote = { id, title, text };

  // Push the combined note into the array of notes
  console.log(newNote);
  noteData.push(newNote);
  console.log(noteData);
  
  // Write the updated notes back to db.json
  fs.writeFileSync('./db/db.json', JSON.stringify(noteData, null, 4 ));
  res.json(noteData);
});

app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);