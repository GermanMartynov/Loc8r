module.exports.index = function(req, res, next) {
    res.render('request_test', { title: 'Проверка объекта запроса', req: req });
};
