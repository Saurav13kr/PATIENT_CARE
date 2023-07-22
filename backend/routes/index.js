var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send("Welcome to home route");
});

// handling post request on home route
router.post('/', (req, res, next) => {
  res.status(200).send("Welcome to post home route");
});

module.exports = router;
