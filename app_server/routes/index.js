var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

// GET locations pages
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationsInfo);
router.get('/location/review/new', ctrlLocations.addReview);

// GET about page
router.get('/about', ctrlOthers.about);

module.exports = router;
