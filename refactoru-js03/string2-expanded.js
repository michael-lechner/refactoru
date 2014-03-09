
var isPhoneNumber = function(phoneNumber){
	if(phoneNumber.length !== 12){
		return false;
	}

	console.log(phoneNumber)

	for(var i = 0; i < phoneNumber.length; i++){
		if(i === 3 || i === 7){
			if(phoneNumber[i] !== "-"){
				console.log("you didn't use dashes!")
		 		return false;
		 	}
		 }else{
			if(isNaN(parseInt(phoneNumber[i]))){
				console.log("one of the digits is not a number")
				return false;
			}
		 }
	}

	return true;
}

var isBirthDate = function(birthDate){
	if(birthDate.length > 10){
		return false;
	}

	console.log(birthDate)

	for(var i = 0; i < birthDate.length; i++){
		if(i === 2 || i === 5){
			if(birthDate[i] !== "/"){
				console.log("you didn't use forward slash!")
		 		return false;
		 	}
		 }else{
			if(isNaN(parseInt(birthDate[i]))){
				console.log("one of the digits is not a number")
				return false;
			}
		 }
	}

	return true;
}

var isPostalCode = function(postalCode){
	if(!(postalCode.length === 5 || postalCode.length === 10)){
		return false;
	}

	console.log(postalCode);

	for(var i = 0; i < postalCode.length; i++){
		if(i === 5){
			if(postalCode[i] !== "-"){
				console.log("you didn't use a dash!")
		 		return false;
		 	}
		 }else{
			if(isNaN(parseInt(postalCode[i]))){
				console.log("one of the digits is not a number")
				return false;
			}
		 }
	}

	return true;
}

var phoneNumber = prompt("What is your phone number? (xxx-xxx-xxxx)");
alert(isPhoneNumber(phoneNumber));

var birthDate = prompt("What is your birthdate? (xx/xx/xxxx)");
alert(isBirthDate(birthDate));

var postalCode = prompt("What is your postal code? (xxxxx or xxxxx-xxxx)");
alert(isPostalCode(postalCode));

var state = prompt("What state do you live in? (please enter a two letter abbreviation in caps)");
alert(state === state.toUpperCase() && state.length === 2);

var married = prompt("Are you married? (please answer yes or no)");
alert(married.toLowerCase() === "yes" || married.toLowerCase() === "no");





