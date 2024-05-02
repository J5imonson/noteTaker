/*
TODO:

API routes:

-POST/api/notes should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
-add old note to new note, push new note into db.json, then re-write file
-download an npm pack for the id
*/

const express = require("express");
const app = express();
const PORT = 3001
const path = require("path");
const noteData = require("./db/db.json");

app.use(express.static("public"));

app.get("/", (req, res) => res.send("directs to index.html"));

app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

app.get("/api/notes", (req, res) => res.json(noteData));

app.post("/api/notes", (req, res) => );

app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);