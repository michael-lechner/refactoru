var QuizModel = require('../models/quizModel');
var mongoose = require('mongoose');

var QuizController = module.exports = {
    find: function (req, res){
        QuizModel.model.find(function (err, data) {
            res.send(data);
        });        
    },
    findById: function (req, res){
        QuizModel.model.findById(req.query.id, {}, {}, function (err, data){
            if(err) console.log(err);
            console.log(data);
            res.send(data);
        })
    },
    findByIdUpdate: function (req, res){
        QuizModel.model.findByIdAndUpdate(req.query.id, {index: req.query.index}, function (err, data) {
            if(err) console.log(err);
            console.log(req.query.id + '   ' + req.query.index);
        });
    },
    create: function (req, res) {
        QuizModel.methods.create('awesome', req.query.to, function (data) {
            res.send(data._id);
        });
    },
    deleteCollection: function (req, res) {
        mongoose.connection.collections['quizzes'].drop( function(err) {
            console.log('collection dropped');
        });
    }
};
