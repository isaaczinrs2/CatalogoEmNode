var connectionFactory = require ('../infra/connectionFactory.js')

module.exports = function(app){
    app.get('/produtos', function(request, response){
       
        var connection = connectionFactory();
        connection.query('select * from produtos', function(err, results){
            response.render('produtos/lista.ejs', {lista:results});
            connection.end();
        });


    });
}