const router = require('express').Router();
const fs = require('fs');


router.get('/notes', (req, res) => {
    // Read DB.json
    let notes = JSON.parse(fs.readFileSync('db/db.json'))
    // Return it
    res.send(notes);
});

module.exports = router;
