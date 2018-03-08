var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponce = function(res, status, content){
    res.status(status);
    res.json(content);
};

// GET запрос отдельного отзыва по locationid
module.exports.reviewsReadOne = function (req, res) {
    if(req.params && req.params.locationid) { // есть ли в параметрах locationid?
        Loc
            .findById(req.params.locationid) // получаем из параметров locationid
            .select('name rewiews') // выбираем имя местоположения и отзывы о нем
            .exec(function (err, location) { // описываем обратный вызов для обработки ответных параметров
                var response, review;
                if(!location) { // если mongoose не вернул местоположение
                    sendJsonResponce(res, 404, {"message" : "locationid not found"});
                    return;
                } else if (err){ // если mongoose  вернул ошибку
                    sendJsonResponce(res, 404, err);
                    return;
                }
                if (location.reviews && location.reviews.length > 0) {
                    review = location.reviews.id(req.params.reviewid);
                    if (!review){ // если отзыва нет - даем соответствующий ответ
                        sendJsonResponce(res, 404, {"message" : "reviewid not found"});
                    } else { // если отзыв есть - создаем объект ответа
                        response = {
                            location : {
                                name : location.name,
                                id : req.params.lacationid
                            },
                            review : review
                        };
                    }
                    sendJsonResponce(res, 200, response);   // Все ок
                } else { // если отзывов не найдено
                    sendJsonResponce(res, 404, {"message" : "No reviews found"});
                }
            });
    } else {
        sendJsonResponce(res, 404, {"message" : "Not found, locationid and reviewid are both required"});
    }
};

module.exports.reviewsCreate = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.reviewsUpdateOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};

module.exports.reviewsDeleteOne = function (req, res) {sendJsonResponce(res, 200, {"status" : "success"})};