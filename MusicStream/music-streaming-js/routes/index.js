var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    condition: false,
    arr: [1, 2, 3]
  });
});

router.get('/album/:id', function (req, res, next) {
  res.render('album', {
    output: req.params.id
  });
});

module.exports = router;