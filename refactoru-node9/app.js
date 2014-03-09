/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var quizController = require('./controllers/quizController');
var wordController = require('./controllers/wordController');
var mainController = require('./controllers/mainController');

var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@troup.mongohq.com:10043/app22734568');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', mainController.quiz);
app.get('/quiz', mainController.quiz);
app.get('/translate', mainController.translate);

app.get('/random-word', wordController.getRandom);
app.get('/get-translation', wordController.translate);

app.get('/newQuiz', quizController.create);
app.get('/findQuizId', quizController.findById)
app.get('/quizFind', quizController.find);
app.get('/updateIndex', quizController.findByIdUpdate);
app.get('/deleteCollection', quizController.deleteCollection);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
