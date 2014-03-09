function person(fullName, phoneNumber, street ){
	this.fullName=fullName;
	this.phoneNumber=phoneNumber;
	this.street=street;
}


var findVolunteers = function(targetName){
	var targetStreet = '';
	var availableVolunteers = '';


	for(var i = 0; i < victimCount; i++){
		if(victims[i].fullName.toLowerCase() === targetName.toLowerCase()){
			targetStreet = victims[i].street;
			break;
		}
	}

	for(i = 0; i < volunteerCount; i++){
		if(volunteers[i].street.toLowerCase() === targetStreet.toLowerCase()){
			availableVolunteers += " " + volunteers[i].fullName + ", ";
		}
	}

	availableVolunteers = availableVolunteers.substring(0, (availableVolunteers.length - 2));

	return availableVolunteers;
}


var victims = [];
var volunteers = [];
var victimsList = '';
var volunteersList = '';
var victimCount = 0;
var volunteerCount = 0;
var availableVolunteers = '';

do{
	victims[victimCount] = new person(prompt("What's your name? "), prompt("What's your phone number? "), prompt("What's your street? "));
	victimsList += " " + victims[victimCount].fullName + ", ";
	victimCount++;
}while(confirm("Would you like to add another victim? "));

	victimsList = victimsList.substring(0, (victimsList.length - 2));

do{
	volunteers[volunteerCount] = new person(prompt("What's your name? "), prompt("What's your phone number? "), prompt("What's your street? "));
	volunteersList += " " + volunteers[volunteerCount].fullName + ", ";
	volunteerCount++;
}while(confirm("Would you like to add another volunteer? "));

	volunteersList = volunteersList.substring(0, (volunteersList.length - 2));


alert("Number of persons in need: " + victimCount + "\n" 
	+ "Number of volounteers: " + volunteerCount + "\n"
	+ "Victims names: " + victimsList + "\n"
	+ "Volounteers names: " + volunteersList);


availableVolunteers = findVolunteers(prompt("Enter the name of a person in need! "));

alert('Available volunteers: ' + availableVolunteers);

// After all of the above, prompt the user to enter the name of a person 
// in need. Then display an alert that lists all the volunteers that are available 
// to help on the same street.