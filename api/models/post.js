const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    preparation_time: {
        type: Number,
        required: true
    },
    view: {
        type: Number,
        default: 0,
        required: true
    },
    number_of_people: {
        type: Number,
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    image: {
        type: String,
        required: true
    }


}, { timestamps: true });

module.exports = mongoose.model('post', postSchema)