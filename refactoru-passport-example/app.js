
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var passportConfig = require('./config/passport');

var indexController = require('./controllers/indexController');

var authController = require('./controllers/authController');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

/* passport requirements must be available before router*/
app.use(express.cookieParser());
app.use(express.session({secret: 'super secret string'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost/passport-test')
}

app.get('/', authController.ensureAuthenticated, indexController.index);

app.get('/login', authController.login);
app.get('/login/facebook', passport.authenticate('facebook'));
app.get(
    '/facebook/callback', 
    passport.authenticate('facebook', {failureRedirect: '/login'}),
    authController.loginSuccess
);
app.get('/logout', authController.logout);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
