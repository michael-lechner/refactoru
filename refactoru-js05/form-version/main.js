function person(fullName, phoneNumber, street ){
	this.fullName = fullName;
	this.phoneNumber = phoneNumber;
	this.street = street;
}

var printToId = function(id, myVals){
	var i = null;

	switch(id)
		{
			case '#victim-list':

				if(myVals.length === 1){
					$('#victim-table').css('visibility', 'visible');
				}

				$(id).html('<p>Number of Victims: ' + myVals.length + '</p>');				

				$('#victim-table').html('');

				 for(i = 0; i < myVals.length; i++){
				 	$('#victim-table').append('<tr><td>' + myVals[i].fullName + '</td><td>' 
				 		+ myVals[i].phoneNumber + '</td><td>' 
				 		+ myVals[i].street + '</td></tr>');
				 }
				break;
			case '#volunteer-list':

				if(myVals.length === 1){
					$('#volunteer-table').css('visibility', 'visible');
				}

				$(id).html('<p>Number of Volunteers: ' + myVals.length + '</p>');

				$('#volunteer-table').html('');
				
				for(i = 0; i < myVals.length; i++){
				 	$('#volunteer-table').append('<tr><td>' + myVals[i].fullName + '</td><td>' 
				 		+ myVals[i].phoneNumber + '</td><td>' 
				 		+ myVals[i].street + '</td></tr>');
				 }

				break;
			case '#help-list':

				if(myVals.length >= 1){
					$('#help-table').css('visibility', 'visible');
				}
				
				$('#help-table').html('');

				for(i = 0; i < myVals.length; i++){
				 	$('#help-table').append('<tr><td>' + myVals[i] + '</td><tr>'); 
				 }

				break;
			default:
				console.log('I\'m in the default');
			break;
		}
}

var findVolunteers = function(targetName){
	var targetStreet = null;
	var availableVolunteers = [];

	for(var i = 0; i < victims.length; i++){
		if(victims[i].fullName.toLowerCase() === targetName.toLowerCase()){
			targetStreet = victims[i].street;
			console.log('target street: ' + targetStreet);
			break;
		}
	}

	for(i = 0; i < volunteers.length; i++){
		if(volunteers[i].street.toLowerCase() === targetStreet.toLowerCase()){
			availableVolunteers.push(volunteers[i].fullName);
		}
	}


	return availableVolunteers;
}

var getHelp = function(e){
	var availableVolunteers = [];

	e.preventDefault();

	console.log("HElp!!!");

	var name = $('#help-name').val();

	availableVolunteers = findVolunteers(name);
	
	printToId('#help-list', availableVolunteers);
}

var addVictim = function(e){
	e.preventDefault();

	var fullName = $('#full-name-victim').val();
	var phoneNumber = $('#phone-num-victim').val();
	var street = $('#street-victim').val();

	victims.push((new person(fullName, phoneNumber, street)));

	$('#full-name-victim').val('');
	$('#phone-num-victim').val('');
	$('#street-victim').val('');

	printToId('#victim-list', victims);
}

var addVolunteer = function(e){
	e.preventDefault();

	var fullName = $('#full-name-vol').val();
	var phoneNumber = $('#phone-num-vol').val();
	var street = $('#street-vol').val();

	volunteers.push((new person(fullName, phoneNumber, street)));

	$('#full-name-vol').val('');
	$('#phone-num-vol').val('');
	$('#street-vol').val('');

	printToId('#volunteer-list', volunteers);

}

$(document).on('ready', function(){

	$('#submit-victim').on('click', addVictim);
	$('#submit-vol').on('click', addVolunteer);
	$('#submit-help-name').on('click', getHelp);


});

var victims = [];
var volunteers = [];
var availableVolunteers = [];




