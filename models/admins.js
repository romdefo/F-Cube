var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    telephone: String,
    token: String
});

var adminModel = mongoose.model('admins', adminSchema);

module.exports = adminModel;