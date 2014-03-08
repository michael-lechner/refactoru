var video = require('../models/video.js');

var main = module.exports = {
    submitIndex: function(req, res){
        res.render('submit.jade');
    },
    formSubmit: function(req, res){
        video.submitVideo(req.body);
        res.redirect('/view');
    }

};