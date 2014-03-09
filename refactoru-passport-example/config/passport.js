var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var UserModel = require('../models/UserModel');

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (userid, done) {
    UserModel.findOne({_id: userid}, function (err, user) {
        done(err, user);
    });
});

/* var facebookStrategy = new FacebookStrategy(connection, callback); */
var facebookStrategy = new FacebookStrategy({
    clientID: '444921652306374',
    clientSecret: '5551555a2132df1337f59cc7f4fd135e',
    callbackURL: 'http://localhost:3000/facebook/callback'
}, function(accessToken, refreshToken, profile, done) {
    /* information that comes back from facebook */
    console.log(accessToken, refreshToken, profile);

    UserModel.findOne({userid: profile.id}, function (err, user) {
        if(user){
            return done(err, user);
        }

        var newUser = new UserModel({
            userid: profile.id,
            username: profile.username,
            profile: profile
        });
        newUser.save(function(err, doc){
            return done(err, doc);
        });
    });
}); 

passport.use(facebookStrategy);