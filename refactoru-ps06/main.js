/*
    Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, 
    respectively, separated by a space. For example: if the array contains [7, 7, 12, 98, 106] the output should be "12 98". The array will not be 
    empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!
*/

var secondGreatLow = function (arr) {
    var a = arr.splice(0);
    var low, great;

    a.sort(function (a, b) { return a > b });

    for(var i = 0; i < a.length; i++){
        if(a[i] !== a[i + 1]){
            if(a[i + 1]){
                low = a[i + 1].toString();
                break;
            }else{
                low = a[i].toString();
            }
        }
    }

    for(var i = (a.length - 1); i >= 0; i--){
        if(a[i] !== a[i - 1]){
            if(a[i - 1]){
                great = a[i - 1].toString();
                break;
            }else{
                great = a[i].toString();
            }
        }
    }

    return low + ' ' + great;
}

/*
    Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then 
    the output should be 1:3). Separate the number of hours and minutes with a colon.
*/

var timeConvert = function (num) {
    var hr = Math.floor(num / 60);
    var mn = num % 60;
    return hr.toString() + ':' + mn.toString();
}
/*
    Bonus:
    Write a function bracketMatcher that takes a single string parameter and returns true if the brackets are correctly matched and each one is accounted 
    for. Otherwise return false. For example: if str is "(hello (world))", then the output should be true, but if str is "((hello (world))" the the output 
    should be false because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return true.
*/

var bracketMatcher = function (str) {
    var left = 0, right = 0;

    for(var i = 0; i < str.length; i++){
        if(str[i] === '(') left++;
        if(str[i] === ')') right++;
    }

    return left === right;
}



