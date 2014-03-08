/** Given a day number from 0 to 6, return the full day of the week for that number. */
var getDayName = function(dayNumber) {
 var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 return dayNames[dayNumber];
};

// Returns a string that concatenates each string from the array
// separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';
 for(var i=0; i<arr.length; i++) {
  if(i === (arr.length - 1)){
      output += arr[i]  ;
  }else{
      output += arr[i] + delimeter;    
  }

 }
 return output;
};

var map = function(arr, f) {
    var output = [];

    if(f){
        for(var i=0; i<arr.length; i++) {
            output.push(f(arr[i]));
        } 
        return output;
    }else{
        return arr.splice(0);
    }
};

var filter = function(arr, f) {
    var output = [];

    if(f){
        for(var i=0; i<arr.length; i++) {
            if(f(arr[i])) {
                output.push(arr[i]);
            }
        }
        return output;
    }else{
        return arr.splice(0);
    }
};