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
    type: String,
    title: String,
    address: String,
    maxNumberOfPeople: Number,
    description: String,
    users: [userSchema]
});

var eventModel = mongoose.model('events', eventSchema);

module.exports = eventModel;