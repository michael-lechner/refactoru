var BeGlobal = require('node-beglobal');

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '6YYq2ZWcYDbtkWQMZjl9hg%3D%3D'
});

var beGlobalModel = module.exports = {
    translate: function (obj, callback) {
        console.log(obj.text);
        beglobal.translations.translate(
          {text: obj.text, from: obj.from, to: obj.to},
          function(err, results) {
            if (err) {
              return console.log(err);
            }
            callback(results);
          }
        );   
    }

}
