var video = require('../models/video.js');

var main = module.exports = {
    viewIndex: function(req, res){
        var videos = video.getAllVideos()
        console.log(videos);
        res.render('view.jade', {videos: videos});
    }
}