var mongoose = require('mongoose');
var wordModel = require('./wordModel');

var QuizSchema = new mongoose.Schema({
    wordArray: Array,
    score: Number,
    uid: String,
    // index: Number,
    index: {type: Number, default: 0},
    lang: String
});

module.exports = {};


// Static
var QuizModel = module.exports.model = mongoose.model('quiz', QuizSchema);

module.exports.methods = {
    create: function (uid, lang, callback) {
        newQuiz = new QuizModel();
        newQuiz.uid = uid;
        newQuiz.lang = lang;

        wordModel.getTenRandom(lang, function (arr) {
            newQuiz.wordArray = arr;

            newQuiz.save();
            callback(newQuiz);

        });

    }
}
