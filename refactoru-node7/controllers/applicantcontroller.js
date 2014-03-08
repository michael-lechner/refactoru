var ApplicantModel = require('../models/applicantmodel');

var ApplicantController = module.exports = {
    list: function (req, res){
        ApplicantModel.find({}, function (err, docs){
            res.render('applicants', { applicants: docs })
        })
    },    
    detail: function (req, res){

    },
    create: function (req, res){
        var applicant = new ApplicantModel(req.body);

        applicant.save(function(){
           res.render('success', req.body);
        });
    },
    update: function (req, res){

    },
    delete: function (req, res){
        console.log(req.body.name);
        ApplicantModel.remove({name: req.body.name}, function(err){
             res.redirect('/applicant/list');
        });
    }
};