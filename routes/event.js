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

  if (req.body.date == ''
    || req.body.audience == ''
    || req.body.type == ''
    || req.body.title == ''
    || req.body.address == ''
    || req.body.maxNumberOfPeople == ''
    || req.body.description == ''
  ) {
    error.push('Certains champs sont vides !')
  }

  if (error.length == 0) {
    var newEvent = new eventModel({
      date: req.body.date,
      audience: req.body.audience,
      type: req.body.type,
      title: req.body.title,
      address: req.body.address,
      maxNumberOfPeople: req.body.maxNumberOfPeople,
      description: req.body.description
    })

    saveEvent = await newEvent.save()

    if (saveEvent) {
      result = "Félicitations, l'événement a été ajouté !"
    }
  }

  res.json({ result, error })
})

router.get('/see-events/:audience', async function (req, res, next) {
  let events;
  if (req.params.audience == "see-all") {
    events = await eventModel.find();
  } else {
    events = await eventModel.find({ $or: [{ audience: req.params.audience }, { audience: "all" }] });
  }
  res.json({ events })
})

router.post('/remove-event/', async function (req, res, next) {
  await eventModel.deleteOne({ title: req.body.title, date: req.body.date })
  eventList = await eventModel.find();
  res.json(eventList)
});

router.post('/add-participant', async function (req, res, next) {
  var result = false
  var error = []

  const findEvent = await eventModel.findOne({
    title: req.body.eventTitle,
  })

  if (findEvent) {
    if (findEvent.maxNumberOfPeople === 0) {
      error.push("Desolé, le nombre maximum de participants a été atteint !")
    }
    if (findEvent.maxNumberOfPeople > 0 && findEvent.maxNumberOfPeople <= findEvent.maxNumberOfPeople) {
      findEvent.maxNumberOfPeople--
      findEvent.users.push({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        telephone: req.body.telephone,
        status: req.body.status
      })

      await findEvent.save()
      result = true
    }
  }
  res.json({ result, error })
})

module.exports = router;