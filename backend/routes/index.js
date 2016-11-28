var models  = require('../models');
var router = require('express').Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage });

// user routes
router.get('/users', function(req, res) {
  models.User.findAll({
    include: [ models.Munchie ]
  }).then(function(users) {
    res.json(users);
  });
});

// munchie routes
router.post('/munchie', upload.single('image'), function(req, res) {
  var { title, description, name, price, number } = req.body;
  var { filename } = req.file;

  models.Munchie.create({
    title,
    description,
    name,
    number,
    price,
    image: `${filename}`
  })
  .then(function(munchie) {
    res.status(200).json(munchie);
  })
  .error(function(error) {
    console.log('error')
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
