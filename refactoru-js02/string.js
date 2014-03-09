var userWord = prompt("Please enter a word! ");

alert("Your word was " + userWord + 
		"\nThere are " + userWord.length + " characters in this word" + 
		"\nThe third character is " + userWord.charAt(2) + 
		"\nLowercase: " + userWord.toLowerCase() +
		"\nUppercase: " + userWord.toUpperCase() + 
		"\nThis is my " + userWord + " in a sentence" + 
		"\nSubword: " + userWord.substring(1,4));

