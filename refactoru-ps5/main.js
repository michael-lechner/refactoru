/*Write a function alphabetSoup that takes a single string parameter and returns the 
    string with the letters in alphabetical order (ie. hello becomes ehllo). Assume 
    numbers and punctuation symbols will not be included in the string.
*/

var alphabetSoup = function(str) {

    return str.split('').sort().join('');

};


/* Write a function vowelCount that takes a single string parameter and returns the 
    number of vowels the string contains (ie. "All cows eat grass" would return 5).
*/

var vowelCount = function(str) {
    var count = 0;
    var testStr = str.toLowerCase();

    for(var i = 0; i < str.length; i++){
        if(testStr[i] === 'a'){
            count++;
        }else if(testStr[i] === 'e'){
            count++;
        }else if(testStr[i] === 'i'){
            count++;
        }else if(testStr[i] === 'o'){
            count++;
        }else if(testStr[i] === 'u'){
            count++;
        }
    }

    return count;

};





console.log(alphabetSoup('hello'));

console.log(vowelCount('All cows eat grass'));