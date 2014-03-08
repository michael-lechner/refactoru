
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

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
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/hi', function(req, res){res.send('hihihihihihihihihihihihihih')});
app.get('/best-route', function(req, res){res.send('this is totally the best route')});
app.get('/worst-route', function(req, res){res.send('don\'t take this route it\'s the worst')});
app.get('/form', function(req, res) {
	var fileContents = fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
 		res.end(data);
	});
});

app.post('/formsubmit', function(req, res){
	console.log('I made it!');
	res.redirect('/success');
});

app.get('/success', function(req, res){res.send('great success!!')});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
