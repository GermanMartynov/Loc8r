// Home page
module.exports.homelist = function(req, res){
    var data = {
        title: 'Найдите места для работы с wifi возле вас!',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Найдите места для работы с wifi возле вас!'
        },
        sidebar: "Ищете где посидеть с wifi? Loc8r поможет вам найти место для работы вне дома и расскажет о нем. " +
        "Кофе, пироженое или кружка пива? Loc8r найдет то, что вам нужно.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Горячие напитки', 'Спиртное', 'Еда', 'Премиум wifi'],
            distance: '200 m'
        },{
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Горячие напитки', 'Спиртное', 'Еда', 'Премиум wifi'],
            distance: '100 m'
        },{
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Горячие напитки', 'Спиртное', 'Еда', 'Премиум wifi'],
            distance: '250 m'
        }]
    }
    res.render('location-list', data);
}

// Lacations list
module.exports.locationsInfo = function(req, res){
    var data = {
        title: 'Starcups',
        pageHeader: {title: 'Starcups'},
        sidebar: {
            context: 'Это кафе указано на нашем сайте потому, что предоставляет доступ к wifi и место для вашего лоптопа.',
            callAction: 'Если вам понравилось или не понравилось это место - оставьте свой отзыв, чтобы помочь другим людям.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Горячие напитки', 'Спиртное', 'Еда', 'Премиум wifi'],
            coords: {lat: 51.455041, lng: -0.9690884},
            openingTimes: [{
                days: 'Понедельник - Пятница',
                opening: '7:00',
                closing: '19:00',
                closed: false
            },{
                days: 'Суббота',
                opening: '8:00',
                closing: '17:00',
                closed: false
            },{
                days: 'Воскресение',
                closed: true
            }
            ],
            reviews: [{
                author: 'German',
                rating: 5,
                timestamp: '2 февраля 2018',
                reviewText: 'Отлично! '
            },{
                author: 'Чарли Чаплин',
                rating: 3,
                timestamp: '2 февраля 2018',
                reviewText: 'В принципе можно зайти. Кофе дрянь, но интернет летает.'
            }]
        }

    }
    res.render('location-info', data);
};

// add review
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
        title: 'Отзыв о Starcups на Loc8r',
        pageHeader: {title: 'Отзыв о Starcups'}
    });
}