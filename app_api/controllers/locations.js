var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponce = function(res, status, content){
    res.status(status);
    res.json(content);
};

// GET
module.exports.locationsReadOne = function (req, res) {
    if(req.params && req.params.locationid) { // есть ли в параметрах locationid?
        Loc
            .findById(req.params.locationid) // получаем из параметров locationid
            .exec(function (err, location) { // описываем обратный вызов для обработки ответных параметров
                if(!location) { // если mongoose не вернул местоположение
                    sendJsonResponce(res, 404, {"message" : "No locationid not found"});
                    return;
                } else if (err){ // если mongoose  вернул ошибку
                    sendJsonResponce(res, 404, err);
                    return;
                }
            sendJsonResponce(res, 200, location);   // Все ок
            });
    } else {
        sendJsonResponce(res, 404, {"message" : "No locationid in request"});
    }
};

module.exports.locationsListByDistance = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.locationsCreate = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.locationsUpdateOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.locationsDeleteOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};