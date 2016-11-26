var models  = require('../models');
var router = require('express').Router();

// user routes
router.get('/users', function(req, res) {
  models.User.findAll({
    include: [ models.Munchie ]
  }).then(function(users) {
    res.json(users);
  });
});

// munchie routes
router.post('/munchie', function(req, res) {
  var { title, description, name, number} = req.body;
  console.log("Create new munchie", req.body);

  models.Munchie.create({
    title: title,
    description: description,
    name: name,
    number: number
  });
});

router.get('/test/:title', function(req, res) {
  var title = req.params.title;
  console.log("Create new munchi", title);

  models.Munchie.create({
    title: title,
    description: "This is a new munchie, please eat me!",
    name: "Sarah Wu",
    number: "301-222-3490",
    price: "69.69"
  })
  .then(function() {
    req.status(200);
  })
  .catch(function(error) {
    res.status(400).send(error);
  });
});

router.get('/munchies', function(req, res) {
  console.log("Find all munchies created in the last 24 hours.");

  models.Munchie.findAll({
    where: { createdAt: { $gt: new Date(new Date() - 24 * 60 * 60 * 1000) }}
  })
  .then(function(munchies) {
    res.json(munchies);
  });
});

router.get('/munchie/:id', function(req, res) {
  var id = req.params.id;

  console.log('Find muchie by id', req.params.id);

  models.Munchie.findById(id)
  .then(function(munchie) {
    res.json(munchie);
  })
});

module.exports = router;
