var WordModel = require('../models/wordModel');
var BeGlobal = require('../models/beGlobalModel');

var WordController = module.exports = {
    find: function(req, res){
        WordModel.find(function (err, data) {
            res.send(data);
        });
    },
    getRandom: function (req, res) {
        WordModel.random(function (err, word) {
            if(err) console.log(err);
            res.send(word)
        });
    },
    translate: function (req, res) {
        BeGlobal.translate(
            {text: req.query.text, from: 'eng', to: req.query.to}, 
            function (translation) {
                res.send(translation);
        });
    }
}