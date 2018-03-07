module.exports.index = function(req, res, next) {
    res.send(''process.env.MONGOLAB_URI:' + process.env.MONGOLAB_URI +
        '<br/>process.env.NODE_ENV:' + process.env.NODE_ENV);
};
