//import mongoose to build the model 

const mongoose = require('mongoose');

//THe MOdel - or the rules the engries need to follow 

const NoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "{PATH} is required"],
            minLength: [3, "{PATH} must be at least 3 characters"]

        },
        content: {
            type: String,
            require: [true, "{PATH} is required"],
            minLength: [3, "{PATH} must be at least 3 characters"]
        },
        isImportant: {
            type: Boolean,
            default: false
        }
    } , {timestamps: true}
)

module.exports = mongoose.model("Note" , NoteSchema);