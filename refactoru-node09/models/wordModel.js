var mongoose = require('mongoose');
var BeGlobal = require('./beGlobalModel');

var WordSchema = new mongoose.Schema({
    word: String
});

/******************************************** 
 * adds a static function to the WordSchema
 * that pulls a random document from the
 * words db
*********************************************/
WordSchema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {
      return callback(err);
    }
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(callback);
  }.bind(this));
};

WordSchema.statics.getTenRandom = function (lang, callback) {
    var arr = [];
    
    for(var i = 0; i < 10; i++){
        this.random(function(err, word){
            BeGlobal.translate({text: word.word, from: 'eng', to: lang}, function(translation){
                arr.push({
                    translation: translation.translation,
                    word: word.word,
                    isCorrect: false 
                });
                console.log('word: ' + word.word);
                // console.log('word model: ' + arr);
                if(arr.length === 10){
                     callback(arr);               
                }                  
            });
        });        
    }

    

    
};

var WordModel = module.exports = mongoose.model('word', WordSchema);

