var express = require('express');
var router = express.Router();
var ctrlRequest = require('../controllers/request');

/* GET home page. */
router.get('/', ctrlRequest.index);

module.exports = router;
