var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'ParkEasy' });
});

router.get('/admin', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/booking', function(req, res, next) {
  res.render('booking', { title: 'Book your space' });
});

module.exports = router;
