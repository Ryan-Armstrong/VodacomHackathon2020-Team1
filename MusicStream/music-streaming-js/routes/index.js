var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/album/:id', function (req, res, next) {
  res.render('album', {
    output: req.params.id,
    duration: 168,
    arr: [{
      name: 'Sober'
    }, {
      name: 'Obsessed'
    }, {
      name: 'How could you'
    }, {
      name: 'Sweet wine'
    }, {
      name: 'Love Everything'
    }, {
      name: 'Church bells'
    }, {
      name: 'Love'
    }, {
      name: 'Passion'
    }]
  });
});

module.exports = router;