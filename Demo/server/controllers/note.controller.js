const Note = require('../models.note.model');

//create a note 

//after = you can make it an object instead of doing module.exports.

module.exports.createNote = (req, res) => {
    const newNote = new Note(req.body);
    newNote
}


module.exports.findAllNotes = (req, res) => {
    Note.find()
    .then((notes) => {
            res.json(notes);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
}
