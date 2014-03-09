function person(fullName, phoneNumber, street ){
	this.fullName=fullName;
	this.phoneNumber=phoneNumber;
	this.street=street;
}

// var person1 = new person('mitch', 6666666, 'blah');

// console.log(person1.fullName);
// console.log(person1.phoneNumber);
// console.log(person1.street);


var victims = [];
var volunteers = [];
var victimsList = '';
var volunteersList = '';

var numVictims = prompt("How many victims are there?");
for(var i = 0; i < numVictims; i++){
	victims[i] = new person(prompt("What's your name? "), prompt("What's your phone number? "), prompt("What's your street? "));
	
	if(i === (numVictims - 1)){
		victimsList += " " + victims[i].fullName;		
	}else{
		victimsList += " " + victims[i].fullName + ", ";
	}
}

var numVolunteers = prompt("How many volunteers are there?");
for(var i = 0; i < numVolunteers; i++){
	volunteers[i] = new person(prompt("What's your name? "), prompt("What's your phone number? "), prompt("What's your street? "));
	
	if(i === (numVolunteers - 1)){
		volunteersList += " " + volunteers[i].fullName;
	}else{
		volunteersList += " " + volunteers[i].fullName + ", ";
	}
}



// At the end, print out, in a single alert, the number of persons in need, the number of volunteers, 
// and a list of all persons in need and all volunteers. You may format this in any way that looks reasonable.

alert("Number of persons in need: " + numVictims + "\n" 
	+ "Number of volounteers: " + numVolunteers + "\n"
	+ "Victims names: " + victimsList + "\n"
	+ "Volounteers names: " + volunteersList);



// for(i = 0; i < numVictims; i++){
// 	console.log(victims[i].fullName);
// }
