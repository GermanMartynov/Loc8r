var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';  // локальная база данных
var mlab_URI = 'mongodb://box1612:a7658653w@ds261128.mlab.com:61128/box1612-dev'; // удаленная база на mlab.com

mongoose.connect(dbURI);

mongoose.connection.on('conected', function(){
    console.log('Mogoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('Mogoose connection error: ' + err);
});

mongoose.connection.on('disconected', function(){
    console.log('Mogoose disconnected');
});

// функция для приема сообщения и функции обратного вызова
var gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
//запускаем прослушивание события SIGUSR2 , которое генерит nodemon при перезапуске приложения
process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){ // выводим сообщение и убиваем соединение с db
        process.kill(process.pid, 'SIGUSR2');
    });
});
//запускаем прослушивание события SIGINT , которое возникает при остановке приложения
process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){ // выводим сообщение и прекращаем соединение с db
        process.exit(0);
    });
});
//запускаем прослушивание события SIGTERM , которое возникает при остановке приложения в Heroku
process.on('SIGTERM', function(){
    gracefulShutdown('Heroku app shotdown', function(){ // выводим сообщение и прекращаем соединение с db
        process.exit(0);
    });
});

// подгружаем модели данных
require('./locations');