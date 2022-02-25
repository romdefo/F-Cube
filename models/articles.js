var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    img: String,
    author: String,
    category: String,
    isNews: Boolean
});

var articleModel = mongoose.model('articles', articleSchema);

module.exports = articleModel;