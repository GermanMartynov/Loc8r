var mongoose = require('mongoose');

//схема отзыва
var reviewSchema = new mongoose.Schema({
   author: String,
   rating: {type:Number, required: true, min: 0, max:5},
   reviewText: String,
   createdOn: {type: Date, default: Date.now}
});

//схема часов работы
var openingTimeSchema = new mongoose.Schema({
   days: {type: String, required: true},
   opening: String,
   closing: String,
   Closed: {type: Boolean, required: true}
});

//схема места
var locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number, "default":0, min:0, max:5},
    facilities: [String],
    coords:{type:[Number], index: '2dsphere'},
    openingTimes: [openingTimeSchema], //ссылка на схему часов работы
    reviews: [reviewSchema]  //ссылка на схему отзыва
});

// создаем модель Location на основе схемы locationSchema
mongoose.model('Location', locationSchema);