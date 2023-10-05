const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    jokeText: {
        type: String,
        required: true,
    },
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;
