var express = require('express');
var router = express.Router();
// let Parking = require('../models/admininfo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'ParkEasy' });
});

router.get('/admin', function(req, res, next) {
  res.render('adminregister', { title: 'login' });
});

router.get('/booking', function(req, res, next) {
  res.render('booking', { title: 'Book your space' });
});

router.get('/signin', function(req, res, next) {
  res.render('adminlogin', { title: 'Admin Signin' });
});

module.exports = router;
