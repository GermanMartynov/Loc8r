module.exports.about = function(req, res){
    res.render('generic-text', {
        title: 'О компании',
        text: 'Loc8r создан, чтобы помочь людям найти место, где можно получить доступ к wifi и немного поработать. ' +
        'Вероятно, вам захочется добавить сюда дополнительные строки, чтобы страни- ца выглядела так,' +
        'как будто в ней имеется настоящий контент. Обратите внимание на то, что строки, начинающиеся с' +
        'вертикальной черты (|), могут, если нужно, содержать теги HTML. Рисунок 4.13 демонстрирует, как это' +
        'могло бы выглядеть в браузере в случае несколько большего количества контента.'
    });
};