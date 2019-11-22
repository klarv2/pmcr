const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const ImageSchema = new Schema({
    src: {
        type: String,
        required: true
    },
    alt:{
        type: String 
    },
    imgType:{
        type: String 
    },
    title:{
        type: String  
    }, 
    description:{
        type: String  
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Image = mongoose.model('image', ImageSchema);