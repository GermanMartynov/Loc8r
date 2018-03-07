var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource<br/>' + 'process.env.MONGOLAB_URI:' + process.env.MONGOLAB_URI +
      '<br/>process.env.NODE_ENV:' + process.env.NODE_ENV);
});

module.exports = router;
