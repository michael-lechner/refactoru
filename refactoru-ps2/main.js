$(document).on('ready', function(str){

	var firstReverse = function(str){
		var letters = str.split('');
		letters.reverse();

		return letters.join('');
	}

	var swapCase = function(str){
		var letters = str.split('');

		for(var i = 0; i < letters.length; i++){
			if(letters[i] === letters[i].toUpperCase()){
				letters[i] = letters[i].toLowerCase();
			}else if(letters[i] === letters[i].toLowerCase()){
				letters[i] = letters[i].toUpperCase();
			}
		}
		return letters.join('');
	}

	var lettersInWord = function(word){
		var letters = word.split('');
		var targetLetter = null;
		var cnt = 0;
		var letterVal = [];
		var maximum = 0;



		for(var i = 0; i < letters.length; i++){
			targetLetter = letters[i];


			for(var j = 0; j < letters.length; j++){
				if(targetLetter.toLowerCase() === letters[j].toLowerCase()){
					cnt++;
				}
			}

			letterVal.push(cnt);
			letterVal[i] = [targetLetter, cnt]
			cnt = 0;
		}

		for(i = 0; i < letterVal.length; i++){
			if(maximum < letterVal[i][1]){
				maximum = letterVal[i][1];
			}
		}

		return maximum;

	};

	var letterCount = function(str){
		var words = str.split(' ');
		var targetWord = null;
		var targetScore = 0;
		var score;

		for(var i = 0; i < words.length; i++){
			score = lettersInWord(words[i])

			if( score > targetScore){
				targetWord = words[i];
				targetScore = score;
			}
		}

		console.log(words);
		if(targetScore <= 1){
			return -1;
		}else{
			return targetWord;
		}
	}

	console.log(firstReverse('the cat jumped over the fence'));
	console.log(swapCase('Hello, World'));
	console.log(letterCount('the kity cat was jumping over the fencs'));
});