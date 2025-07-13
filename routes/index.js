var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express', myname:'Pulkit Sharma' });
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Express', myname:'Pulkit Sharma' });
});

module.exports = router;
