var express = require('express');
var router = express.Router();

var messageModel = require('../models/messages')

router.post('/add-message', async function (req, res, next) {
    var error = [];
    var result = "Il ne s'est rien passé";
    var saveMessage = null;

    if (req.body.name == ''
        || req.body.email == ''
        || req.body.country == ''
        || req.body.object == ''
        || req.body.content == ''
    ) {
        error.push('champs vides')
    }

    if (error.length == 0) {
        var newMessage = new messageModel({
            date: new Date(),
            name: req.body.name,
            email: req.body.email,
            country: req.body.country,
            object: req.body.object,
            content: req.body.content
        })

        saveMessage = await newMessage.save()

        if (saveMessage) {
            result = "Félicitations, le message a été envoyé !"
        }
    }

    res.json({ result, error })
})

router.get('/see-messages', async function (req, res, next) {
    const messages = await messageModel.find()
    res.json({ messages })
})

module.exports = router;