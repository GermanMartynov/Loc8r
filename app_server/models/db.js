var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';  // локальная база данных

if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
    // ссылка на облачную базу данных mangoLab содержит переменная среды MONGOLAB_URI
    // переменную среды MONGOLAB_URI можно установить из консоли на сервере провайдера.
    // Например на heroku для приложения infinite-sands-81273 переменная среды устанавливается так:
    // $ heroku config:set MONGOLAB_URI=mongodb://<user db>:<passw>@ds261128.mlab.com:61128/box1612-dev --app infinite-sands-81273
}
mongoose.connect(dbURI);


/*   контроль запуска и остановки подключения к базе данных  */
mongoose.connection.on('connected', function(){
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