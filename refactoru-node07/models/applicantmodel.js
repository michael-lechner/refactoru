var mongoose = require('mongoose');

var ApplicantSchema = new mongoose.Schema({
    name: String,
    bio: String,
    skills: String,
    years: Number,
    why: String
});
// Adding static methods to a model
// ApplicantSchema.statics.findByAge(){

// }


var ApplicantModel = module.exports = mongoose.model('applicant', ApplicantSchema);

