
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var ApplicantController = require('./controllers/applicantcontroller');

var mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.configure(function(){
    mongoose.connect('mongodb://localhost/jobapplication');
});

//renders the index page
app.get('/', function(req, res){
	res.render('index')
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants')
});

// creates an applicant
// app.post('/applicant', function(req, res){
//     console.log(req.body); 
//     res.render('success', req.body);
// });
 
app.post('/applicant/create', ApplicantController.create);
app.get('/applicant/list', ApplicantController.list);
app.get('/applicant/delete/view', function (req, res){res.render('applicant-delete')});
app.post('/applicant/delete', ApplicantController.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
