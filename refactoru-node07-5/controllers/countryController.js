var countryModel = require('../models/countryModel');

var countryController = module.exports = {
    list: function (req, res){
        countryModel.find({}, '', {sort: {name: 1}}, function (err, docs) {            
            if(err) return console.log(err);
            res.send(docs);
        });
    },
    find: function (req, res){
        countryModel.find({name: req.params.name}, function (err, docs) {
            if(err) return console.log(err);
            res.send(docs);
        });
    },
    updateTravel: function (req, res){
        console.log(req.params.name);
        console.log(req.params.status);
        if(req.params.status === 'remove'){
            countryModel.findOneAndUpdate({name: req.params.name}, {hasTravelled: false}, function (err, docs){
                if(err) return res.send(err);
                res.send('success');
            });
        }else{
            countryModel.findOneAndUpdate({name: req.params.name}, {hasTravelled: true}, function (err, docs){
                if(err) return res.send(err);
                res.send('success');
            });
        }
    }
}