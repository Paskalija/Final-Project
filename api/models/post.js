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
        type: String,
        required: true
    },
    seen:{
        type:Number,
        default: 0,
        required: true
    },
    number_of_people: {
        type: String,
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
   

}, { timestamps: true });

module.exports = mongoose.model('post', postSchema)