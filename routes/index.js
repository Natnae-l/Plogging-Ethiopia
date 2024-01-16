var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/FAQ', function(req, res, next) {
  res.render('FAQ');
})
router.get('/events', (req, res, next) => {
  res.render('events')
})

module.exports = router;
