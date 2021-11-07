const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');

function readNotes() {
    return JSON.parse(fs.readFileSync('db/db.json'));
}
function saveNotes(notes) {
    fs.writeFileSync('db/db.json', JSON.stringify(notes));
}

router.get('/notes', (req, res) => {
    // Read DB.json
    let notes = readNotes();
    // Return it
    res.send(notes);
});
router.post('/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uniqid();

    // Add this to the list of notes
    let notes = readNotes();
    notes.push(newNote);

    // Save all of the notes
    saveNotes(notes)

    res.send(newNote);
});

router.delete('/notes/:id', (req, res) => {
    let id = req.params.id;
    // Get the existing notes
    let notes = readNotes();

    // Find and remove this one
    notes = notes.filter(note => note.id !== id);

    // Save
    saveNotes(notes);

    res.send();
});

module.exports = router;
