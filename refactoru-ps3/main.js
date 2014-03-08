$(document).ready(function(){
/** Write a function palindrome that takes a single string parameter and returns true 
	if the parameter is a palindrome (the string is the same forward as it is backward), 
	otherwise returns false. For example: palindrome("racecar") should return true because 
	"racecar" is also "racecar" backwards.
*/

	var isPalindrom = function(str){
		revStr = str.split('').reverse().join('');

		return revStr === str ? true : false;

	};

/**	Write a function dashInsert that takes a single num parameter and returns the num with 
	inserted dashes ('-') between adjacent odd digits. For example: if num is 454793 the output 
	should be "4547-9-3".
*/

	var dashInsert= function(num){
		var numStr = num.toString();
		var returnStr = []

		for(var i = 0; i < numStr.length; i++){
			if((numStr[i] % 2) !== 0 && (numStr[i + 1] % 2) !== 0 && i !== numStr.length - 1){
				returnStr.push(numStr.substring(i, i+1));
				returnStr.push('-');
			}else{
				returnStr.push(numStr.substring(i, i+1));
			}
		}

		return returnStr;
	};

/** Write a function caesarCipher that takes a string and number parameter and performs a Caesar Cipher 
	shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each 
	letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, 
	and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the 
	output should be "Ecguct Ekrjgt".
*/

	var caesarCipher = function(str, num){
		var charArr = [];

		for(var i = 0; i < str.length; i++){
			if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
				charArr.push(((str.charCodeAt(i) - 65)%26 + 65) + num);
				charArr[i] = String.fromCharCode(charArr[i]);	
			}else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
				charArr.push(((str.charCodeAt(i) - 97)%26 + 97) + num);
				charArr[i] = String.fromCharCode(charArr[i]);				
			}else{
				charArr.push(str[i])
			}
		}

		return charArr.join('');
	};



	console.log(isPalindrom('racecar'));
	console.log(dashInsert(454793));
	console.log(caesarCipher('Caesar Cipher', 2));
});



