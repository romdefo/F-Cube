var express = require('express');
var router = express.Router();

var eventModel = require('../models/events')

router.post('/add-event', async function (req, res, next) {
  var error = [];
  var result = "Il ne s'est rien passé";
  var saveEvent = null;

  const data = await eventModel.findOne({
    title: req.body.title, date: req.body.date
  })

  if (data != null) {
    error.push('Un même événement est déjà présent à cette date.')
  }

  if (req.body.title == ''
    || req.body.img == ''
    || req.body.content == ''
    || req.body.author == ''
    || req.body.category == ''
  ) {
    error.push('Certains champs sont vides !')
  }

  if (error.length == 0) {
    var newEvent = new eventModel({
      date: req.body.date,
      type: req.body.type,
      title: req.body.title,
      address: req.body.address,
      description: req.body.description,
      img: req.body.img,
    })

    saveEvent = await newEvent.save()

    if (saveEvent) {
      result = "Félicitations, l'événement a été ajouté !"
    }
  }

  res.json({ result, error })
})

router.get('/see-events', async function (req, res, next) {
  const events = await eventModel.find()
  res.json({ events })
})

router.post('/remove-event/', async function (req, res, next) {
  await eventModel.deleteOne({ title: req.body.title, date: req.body.date })
  eventList = await eventModel.find();
  res.json(eventList)
});

module.exports = router;