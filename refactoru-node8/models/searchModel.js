var mongoose = require('mongoose');

var SearchSchema = new mongoose.Schema({
   name: String,
   desc: String,
   type: String 
});

var searchModel = module.exports = mongoose.model('searchterms', SearchSchema);