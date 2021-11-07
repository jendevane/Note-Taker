const router = require('express').Router();
const fs = require('fs');

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

    // Add this to the list of notes
    let notes = readNotes();
    notes.push(newNote);

    // Save all of the notes
    saveNotes(notes)

    res.send(newNote);
});


module.exports = router;
