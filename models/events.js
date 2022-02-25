var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    telephone: String,
    isStudent: Boolean
});

var eventSchema = mongoose.Schema({
    date: Date,
    title: String,
    address: String,
    content: String, 
    img: String,
    isInsertion: Boolean,
    users: userSchema
});

var eventModel = mongoose.model('events', eventSchema);

module.exports = eventModel;