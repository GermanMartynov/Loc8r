var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponce = function(res, status, content){
    res.status(status);
    res.json(content);
};


module.exports.reviewsCreate = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.reviewsReadOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.reviewsUpdateOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.reviewsDeleteOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};