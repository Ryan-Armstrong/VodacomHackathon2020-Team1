var express = require('express');
var router = express.Router();
var mockData = require('./mock-data')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/album/:id', function (req, res, next) {

  res.render('album', {
    output: req.params.id,
    duration: 168,
    album: mockData.Album
  });
});

module.exports = router;