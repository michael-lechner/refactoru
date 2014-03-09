var searchModel = require('../models/searchModel');

var searchController = module.exports = {
    find: function (req, res) {
        searchModel.find({}, function (err, docs) {
            if(err) return console.log(err);
            res.send(docs);
        }); 
    }
}