$(document).on('ready', function(){

	/*pluralize returns the plural version of @param
		word if @param number is not one
	*/
	var pluralize = function(word, number){
		return number === 1 ? word : word + 's';
	};


	/*getVictimInfo creates a victim object through
		a series of user prompts and returns a 
		victim object
	*/
	var getVictimInfo = function() {
		var victim = {};
 
 		victim.name = prompt("Please enter your name:");
 		victim.phone = prompt("Please enter your phone number:");
 		victim.street = prompt("Please enter your street:");
 
 		return victim;
	};

	/*stringifyVictimInfo concatenates and
		returns a string from the name, phone and
		street properties of a @param victim 
		object
	*/
	var stringifyVictimInfo = function(victim){
		var infoString = victim.name + ", " +
 						victim.phone + ", " +
 						victim.street;

		return infoString
	}

	// Write a function which removes falsey values from an array. A falsey value is one 
	// which evaluates to false when type coerced, which are the following:0, null, "" (empty string), 
	// undefined, NaN, false.

	// Write two versions of the function: one that uses side effects and one that is pure.

	/* removeFalseyPure returns an array
		that includes all non-falsey values
		in @param a
	*/
	var removeFalseyPure = function(a){

		for(var i = 0; i < a.length; i++){
			if(!a[i]){
				a.splice(i, 1);
				i--;
			}
		}

		return a;

	};

	var a = [ 1, NaN, 2, undefined, 0, null, '', 3];
	var b = [];


	/* removeFalseyEffects manipulates two
		global arrays removing all falsey
		values from array a
	*/
	var removeFalseyEffects = function(){
		for(var i = 0; i < a.length; i++){
			if(a[i]){
				b.push(a[i]);
			}
		}

		a = b;
		b = [];
		console.log(a);
	};







	//console.log(pluralize('me', 2));

	// var victim = getVictimInfo();

	// alert('Thank you! Victim entered: \n' + stringifyVictimInfo(victim));

	console.log(removeFalseyPure([ 1, NaN, 2, undefined, 0, null, '', 3]));

	console.log(removeFalseyEffects());


	

});