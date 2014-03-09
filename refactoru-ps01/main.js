// Write a function called letterCapitalize which takes a single string parameter and 
// capitalizes the first letter of each word in the string. You can assume that words in 
// the input string will be separated by only one space.
var letterCapitalize = function(str){
	var strArray = str.split(' ');

	for(var i = 0; i < strArray.length; i++){
		strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
	}

	return strArray.join(", ");
}


// Write a function called wordCount which takes a single string parameter and returns the number 
// of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that 
// words in the input string will be separated by only one space.
var wordCount = function(str){
	var strArray = str.split(' ');

	return strArray.length;
}


$(document).on('ready', function(){

	//letterCapitalize test
	console.log(letterCapitalize('my name is bob'));

	//wordCount test
	console.log(wordCount('never eat shredded wheat'));

});