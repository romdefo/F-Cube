var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    firstName: String,
    email: String,
});

var volunteerSchema = mongoose.Schema({
    date: Date,
    time: String,
    group: String,
    users: [userSchema]
});

var volunteerModel = mongoose.model('volunteers', volunteerSchema);

module.exports = volunteerModel;