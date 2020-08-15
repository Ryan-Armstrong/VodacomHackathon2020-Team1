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
    album: [{
      id: 1,
      name: 'Sober',
      fav: false,
      playing: false
    }, {
      id: 2,
      name: 'Obsessed',
      fav: false,
      playing: false
    }, {
      id: 3,
      name: 'How could you',
      fav: true,
      playing: false
    }, {
      id: 4,
      name: 'Sweet wine',
      fav: false,
      playing: false
    }, {
      id: 5,
      name: 'Love Everything',
      fav: false,
      playing: false
    }, {
      id: 6,
      name: 'Church bells',
      fav: false,
      playing: false
    }, {
      id: 7,
      name: 'Love',
      fav: false,
      playing: false
    }, {
      id: 8,
      name: 'Passion',
      fav: false,
      playing: false
    }]
  });
});

module.exports = router;