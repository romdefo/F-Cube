var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    date: Date,
    name: String,
    email: String,
    country: String,
    object: String,
    content: String
});

var messageModel = mongoose.model('messages', messageSchema);

module.exports = messageModel;