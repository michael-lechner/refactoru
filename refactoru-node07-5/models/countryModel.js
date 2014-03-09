var mongoose = require('mongoose');

var CountrySchema = new mongoose.Schema({
    name: String,
    frenchName: String,
    localName: String,
    region: String,
    hasTravelled: { type: Boolean, default: false }
});

var countryModel = module.exports = mongoose.model('countries', CountrySchema);
