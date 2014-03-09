function person(name, title, bio, bookList, javaList){
	this.name = name;
	this.title = title;
	this.bio = bio;
	this.bookList = bookList;
	this.javaList = javaList;
}


var formCancel = function(e){
	e.preventDefault();

	$('#my-name, #my-title, #my-bio, #my-books, #my-java').val('');

	transitionForm(this.id);
}

var formSubmit = function(e){
	e.preventDefault();

	var newPerson = new person($('#my-name').val(), 
		$('#my-title').val(), 
		$('#my-bio').val(), 
		$('#my-books').val(), 
		$('#my-java').val());

	resetProfile();

	setProfile(newPerson);


}

var resetProfile = function(){
	$('#name-display').text('');
	$('#title-display').text('');
	$('#bio-display').text('');
	$('#book-display').text('');
	$('#java-display').text('');
}

var setProfile = function(person){
	$('#name-display').text(person.name);
	$('#title-display').text(person.title);
	$('#bio-display').text(person.bio);
	$('#book-display').text(person.bookList);
	$('#java-display').text(person.javaList);
}

var transitionForm = function(){

	//Ask about this
	if(arguments[0] === 'cancel-button'){
		this.id = 'cancel-button';
	}


	switch(this.id){
		case 'cancel-button':
				$('#form-box').removeClass('form-container-out');
				isFormOut = false;
		break;
		case 'profile-cont':
		 	if(isFormOut){
				$('#form-box').removeClass('form-container-out');
				isFormOut = false;
			}		
		break;
		case 'form-out':
			if(isFormOut){
				$('#form-box').removeClass('form-container-out');
				isFormOut = false;
			}else{
				$('#form-box').addClass('form-container-out');
				isFormOut = true;
			}
		break;
		default:
	}

};



$(document).on('ready', function(){
	$('#form-out').on('click', transitionForm);
	$('#cancel-button').on('click', formCancel);
	$('#submit-button').on('click', formSubmit);
	$('#profile-cont').on('click', transitionForm);
});

var isFormOut = false