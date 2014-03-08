// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/

var splice = function(arr, start, numToReplace, replace) {
    var a = []

    for(var i = 0; i < start && i < arr.length; i++){
        a.push(arr[i]);
    }

    for(var i = 3; i < arguments.length; i++){
        a.push(arguments[i]);
    }

    for(var i = (start + numToReplace); i < arr.length; i++){
        a.push(arr[i]);
    }

    return a;
    
};
