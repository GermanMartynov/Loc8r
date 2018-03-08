var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponce = function(res, status, content){
    res.status(status);
    res.json(content);
};

module.exports.locationsListByDistance = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.locationsCreate = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.locationsReadOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.locationsUpdateOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.locationsDeleteOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};