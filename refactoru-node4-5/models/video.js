var videos = [];

var getId = function(url){
    var embedURL = url.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, 'http://www.youtube.com/embed/$1');
    return embedURL;
}

var videoModel = module.exports = {
  submitVideo: function(obj){
    obj.url = getId(obj.url);

    console.log(obj.url);

    videos.push(obj);


  },
  getAllVideos: function(){
    return videos.slice(0);
  }  
};