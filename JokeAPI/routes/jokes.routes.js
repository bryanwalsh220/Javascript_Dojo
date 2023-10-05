const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.post('/api/jokes', JokesController.createJoke);
    app.get('/api/jokes', JokesController.getAllJokes);
    app.get('/api/jokes/:id', JokesController.getJokeById);
    app.patch('/api/jokes/:id', JokesController.updateJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke);
}
