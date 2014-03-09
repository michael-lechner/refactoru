var isFormOut = false
var numCards = 0;
var maxRating = 5;
var randomCardSelected = null;
var oldRandomNum = null;
var deletedCards = [];
var allCards = [];
var filteredCards = [];

function card(author, quote, rating){
	this.author = author;
	this.quote = quote;
	this.rating = rating;
}

var addCardBack = function(){
	if(deletedCards.length !== 0){
		var parentNode = $('#card-container')
		var card = deletedCards.pop();	

		card.css('width', '250px');

		parentNode.append(card);

		card.animate({opacity: '1.0'}, 700);
		
		numCards++;
	}
}

var addRating = function(){
	var rating = $(this).attr('data-star-id');
	var parentNode = $(this).parent();
	var containerNode = $(this).closest('.card');

	parentNode.find('div').html('&#9734;');

	containerNode.attr('data-rating', rating);
	parentNode.attr('data-rating', rating);
	parentNode.find('div:lt(' + rating + ')').html('&#9733;');

}

var autoAdd = function(author, quote){
	

var	sec1 = '<div class=\"card\"><div class=\"primary\"><h2>';
var	sec2 = '</h2></div><div class=\"secondary\"><div class="author-filter">A</div><div ' + 
			'class=\"delete-card\" >x</div><p>';
var	sec3 = '</p><div class="star-container">' +
                '<div class="rating" id="star1" data-star-id="1">&#9734</div>' +         
                '<div class="rating" id="star2" data-star-id="2">&#9734</div>' +
                '<div class="rating" id="star3" data-star-id="3">&#9734</div>' +
                '<div class="rating" id="star4" data-star-id="4">&#9734</div>' +
                '<div class="rating" id="star5" data-star-id="5">&#9734</div>' +       
            '</div></div></div>';	


	author = letterCapitalize(author, " ");

	var newCard = new card(author, quote, null);

	var newCard = $(sec1 + 
		newCard.author + sec2  + 
		newCard.quote + sec3)

	$('#card-container').append(newCard);		

	newCard.attr('data-card-id', numCards);
	newCard.attr('data-rating', 0);
	newCard.attr('data-author', author);

	numCards++;
	allCards.push(newCard);
}

var clearRandom = function(){
	if(randomCardSelected !== null){
		randomCardSelected.css('background-color', '#c0392b');
		randomCardSelected.closest('.card').removeClass('selected');
		randomCardSelected = null;
	}
}

var deleteCard = function(){
	
	var cardToRemove = $(this).closest('[data-card-id]');
	deletedCards.push(cardToRemove);

	cardToRemove.animate({opacity: '0.0'}, function(){
		 	cardToRemove.animate({width: '0px'}, 700, function(){
		 		cardToRemove.remove();
		});
	});

	numCards--;

}

var filterByAuthor = function(){
	var selectedAuthor = $(this).closest('.card').attr('data-author')

	filteredCards = []

	for(var i = 0; i < allCards.length; i++){
		if(allCards[i].attr('data-author') === selectedAuthor){
			filteredCards.push(allCards[i]);
		}
	}

	$('#card-container').html('')

	for(i = 0; i < filteredCards.length; i++){
		$('#card-container').append(filteredCards[i])
	}
}

var formCancel = function(e){
	e.preventDefault();

	$('#new-author, #new-quote').val('');

	transitionForm();
}

var formSubmit = function(e){
	e.preventDefault();

var	sec1 = '<div class=\"card\"><div class=\"primary\"><h2>';
var	sec2 = '</h2></div><div class=\"secondary\"><div class="author-filter">A</div><div ' + 
			'class=\"delete-card\" >x</div><p>';
var	sec3 = '</p><div class="star-container">' +
                '<div class="rating" id="star1" data-star-id="1">&#9734</div>' +         
                '<div class="rating" id="star2" data-star-id="2">&#9734</div>' +
                '<div class="rating" id="star3" data-star-id="3">&#9734</div>' +
                '<div class="rating" id="star4" data-star-id="4">&#9734</div>' +
                '<div class="rating" id="star5" data-star-id="5">&#9734</div>' +       
            '</div></div></div>';	


	author = letterCapitalize($('#new-author').val(), " ");

	var newCard = new card(author, $('#new-quote').val(), null);

	var newCard = $(sec1 + 
		newCard.author + sec2  + 
		newCard.quote + sec3)


	$('#card-container').append(newCard)

	newCard.attr('data-card-id', numCards);
	newCard.attr('data-rating', 0);
	newCard.attr('data-author', author);

	numCards++;
	allCards.push(newCard);

}

var letterCapitalize = function(str, delim){
        var strArray = str.split(' ');

        for(var i = 0; i < strArray.length; i++){
                strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
        }

        return strArray.join(delim);
}

var noFilter = function(){
	$('#card-container').html('')

	for(i = 0; i < allCards.length; i++){
		$('#card-container').append(allCards[i])
	}	
}

var selectRandom = function(){
	var parentNode = $('#card-container')
	var childNodeList = parentNode.children('.card');
	var randomNum = null;
	var targetNode = null

	if(oldRandomNum !== null){
		do{
			randomNum = Math.floor(Math.random()*numCards);
		}while(randomNum === oldRandomNum);
	}else{
			randomNum = Math.floor(Math.random()*numCards);		
	}

	if(randomCardSelected !== null){
		randomCardSelected.css('background-color', '#c0392b');
		randomCardSelected.closest('.card').removeClass('selected');
	}

	targetNode = $(childNodeList[randomNum]).find('.primary');

	$(targetNode).css('background-color', '#2c3e50');
	$(targetNode).closest('.card').addClass('selected');

	randomCardSelected = $(targetNode);
	oldRandomNum = randomNum;


	console.log(targetNode);

}

var sortCards = function(){
	var parentNode = $('#card-container')
	var childNodeList = parentNode.children('.card');


	var listToSort = childNodeList.toArray();
	
	listToSort = $(listToSort)

	listToSort.sort(function(a, b){
		return ($(b).attr('data-rating') - $(a).attr('data-rating'));
	});

	parentNode.append($(listToSort));
	
}

var starHoverFill = function(){

	var starNum = $(this).attr('data-star-id');

	//console.log($(this).parent().find('div:lt(' + starNum + ')'));

	$(this).parent().find('div:lt(' + starNum + ')').html('&#9733;');

}

var starHoverEmpty = function(){

	var starNum = $(this).attr('data-star-id');
	var rating = $(this).parent().attr('data-rating');
	//console.log($(this).parent().find('div:lt(' + starNum + ')'));

	if(rating >= 1){
		$(this).parent().find('div:gt(' + rating + ')').html('&#9734;');
	}else{
		$(this).parent().find('div:lt(' + starNum + ')').html('&#9734;');
	}
}

var transitionForm = function(){
	var formIn = '<span>&rarr;</span>'
	var formOut = '<span>&larr;</span>'        

	if(isFormOut){
		$('#form-box').removeClass('form-container-out');
		$('#card-container').removeClass('card-container-form-out');
		$('#form-transition').html(formIn);
		isFormOut = false;
	}else{
		$('#form-box').addClass('form-container-out');
		$('#card-container').addClass('card-container-form-out');
		$('#form-transition').html(formOut);		
		isFormOut = true;
	}
}

$(document).on('ready', function(){


	$('#form-transition').on('click', transitionForm);
	$('#cancel-button').on('click', formCancel);
	$('#submit-button').on('click', formSubmit);
	$(document).on('click', '.delete-card', deleteCard);
	$(document).on('mouseover', '.rating', starHoverFill);
	$(document).on('mouseout', '.rating', starHoverEmpty);
	$(document).on('click', '.rating', addRating);
	$(document).on('click', '#sort-by-rating', sortCards);
	$(document).on('click', '#random-card', selectRandom);
	$(document).on('mouseover', '.selected', clearRandom);
	$(document).on('click', '#undo-delete', addCardBack);
	$(document).on('click', '.author-filter', filterByAuthor);
	$(document).on('click', '#undo-filter', noFilter)

	dataLoader();

});

var dataLoader = function(){
	autoAdd('Dr. Dre', 'The only two things that scare me are God and the IRS.');
	autoAdd('Mark Twain', 'Go to Heaven for the climate, Hell for the company.');
	autoAdd('Drake', 'I\'d rather tell you how I really feel.');
	autoAdd('Nikola Tesla', 'The scientists of today think deeply instead of clearly.' +
		'One must be sane to think clearly, but one can think deeply and be quite insane.');
	autoAdd('Oscar Wilde', 'Always forgive your enemies; nothing annoys them so much.');
	autoAdd('Groucho Marx', 'I refuse to join any club that would have me as a member.');
	autoAdd('Woody Allen', 'I am not afraid of death, I just don\'t want to be there when it happens.');
	autoAdd('Oscar Wilde', 'Consistency is the last refuge of the unimaginative.');
};