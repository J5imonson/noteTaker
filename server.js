/*
TODO:

Create html routes:

-GET/notes should return notes.html
-GET* should return index.html

API routes:

-GET/api/notes should read db.json AND return all notes as JSON
-POST/api/notes should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

Need a landing page with a link to the notes page

When the notes link is clicked, a page is presented with existing notes in the left-hand column, plus empty field to enter a new note title and text

When a new note is filled out, a "Save note" button and a "Clear field" button appear in the nav at the top of the page

Save button needs to save new notes in the left-hand column and the buttons then need to disappear

When an existing note is clicked, its text appears in the right-hand field and a "new note" button appears at the top of the page

When "new note" is clicked, then an empty field appears in the right-hand field prompting a new title and text, and "new button" disappears and is replaced by "save" and "clear"
*/

const express = require("express");
const app = express();
const PORT = 3001


app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);