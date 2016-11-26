var express = require('express');
var app = express();
var debug = require('debug')('express-sequelize');
var models = require('./models');
var router = require('./routes');
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', router);

models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */
   app.listen(3000, function() {
     console.log('Example app listening on port 3000!');
   });
});
