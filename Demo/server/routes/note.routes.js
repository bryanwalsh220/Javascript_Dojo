const NotesController = require('../controllers/note.controller');

module.exports = app => {
    app.post('/api/jokes', NotesController.createNote);
    app.get('/api/jokes', NotesController.getAllNotes);
    app.get('/api/jokes/:id', NotesController.getNoteById);
    app.patch('/api/jokes/:id', NotesController.updateNote);
    app.delete('/api/jokes/:id', NotesController.deleteNote);
}
