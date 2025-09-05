const mongoose = require('mongoose')
// Define the Person schema

const personSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

// Create Person model
const Person = mongoose.model('Person',personSchema);
module.exports= Person;