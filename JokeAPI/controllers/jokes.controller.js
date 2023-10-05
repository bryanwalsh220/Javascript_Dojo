const Joke = require('../models/jokes.model');


//create a joke
module.exports.createJoke = (req, res) => {
    const newJoke = new Joke(req.body);
    newJoke 
    .save()
    .then((joke) => {
        res.json(joke);
    })
    .catch((err) =>{
        res.json(err)
    });
};

    //get all jokes
module.exports.getAllJokes = (req, res) => {
    Joke.find()
    .then((jokes) =>{
        res.json(jokes);
    })
    .catch((err) =>{
        res.json(err)
    });
};


    //get a single joke by ID
module.exports.getJokeById = (req, res) => {
    Joke.findById(req.params.id)
    .then((joke) =>{
        if(!joke) {
            return res.json({message: 'JOKE NOT FOUND'});
        }
        res.json(joke);
    })
    .catch((err) => {
        res.json(err)
    });
};

module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedJoke) => {
        if (!updatedJoke) {
        return res.json({ message: 'Joke NOT FOUND' });
        }
        res.json(updatedJoke);
    })
    .catch((err) => {
        res.json({ error: err.message });
    });
};

module.exports.deleteJoke = (req, res) =>{
    Joke.findByIdAndDelete(req.params.id)
    .then((deletedJoke) =>{
        if(!deletedJoke) {
            return res.json({message: "JOKE NOT FOUND"});
        }
        res.json({message: "JOKE DELETED SUCCESSFULLY"})
    })
    .catch((err)=>{
        res.json(err)
    });
;}