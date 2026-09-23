const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Note class and in-memory array
class Note {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
}

let notes = [];
let nextId = 1;

// Create a note
app.post("/notes", (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== "string" || text.trim() === "") {
    const message = "Note text is required";
    console.log(message, { notes });
    return res.status(400).json({
      message,
      notes,
    });
  }

  const newNote = new Note(nextId++, text.trim());
  notes.push(newNote);

  const message = "Note created successfully";
  console.log(message, { notes });

  return res.status(201).json({
    message,
    notes,
  });
});

// Retrieve all notes
app.get("/notes", (req, res) => {
  const message = "All notes";
  console.log(message, { notes });

  return res.json({
    message,
    notes,
  });
});

// Retrieve a specific note by id
app.get("/notes/:id", (req, res) => {
  const noteId = Number(req.params.id);
  const note = notes.find((item) => item.id === noteId);

  if (!note) {
    const message = "Note not found";
    console.log(message, { notes });
    return res.status(404).json({
      message,
      notes,
    });
  }

  const message = "Note found";
  console.log(message, { note, notes });

  return res.json({
    message,
    note,
    notes,
  });
});

// Update a note
app.put("/notes/:id", (req, res) => {
  const noteId = Number(req.params.id);
  const { text } = req.body;

  const noteIndex = notes.findIndex((item) => item.id === noteId);

  if (noteIndex === -1) {
    const message = "Note not found";
    console.log(message, { notes });
    return res.status(404).json({
      message,
      notes,
    });
  }

  if (!text || typeof text !== "string" || text.trim() === "") {
    const message = "Note text is required";
    console.log(message, { notes });
    return res.status(400).json({
      message,
      notes,
    });
  }

  notes[noteIndex].text = text.trim();

  const message = "Note updated successfully";
  console.log(message, { notes });

  return res.json({
    message,
    notes,
  });
});

// Delete a note
app.delete("/notes/:id", (req, res) => {
  const noteId = Number(req.params.id);
  const noteIndex = notes.findIndex((item) => item.id === noteId);

  if (noteIndex === -1) {
    const message = "Note not found";
    console.log(message, { notes });
    return res.status(404).json({
      message,
      notes,
    });
  }

  const deletedNote = notes.splice(noteIndex, 1)[0];
  const message = "Note deleted successfully";
  console.log(message, { deletedNote, notes });

  return res.json({
    message,
    deletedNote,
    notes,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});