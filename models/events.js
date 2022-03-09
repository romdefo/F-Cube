var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    telephone: String,
    status: String
});

var eventSchema = mongoose.Schema({
    date: Date,
    type: String,
    title: String,
    address: String,
    maxNumberOfPeople: Number,
    description: String,
    audience: String,
    users: [userSchema]
});

var eventModel = mongoose.model('events', eventSchema);

module.exports = eventModel;