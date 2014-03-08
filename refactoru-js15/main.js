$(document).on('ready', function(){


	/* Appends new event elemnts to list-main
	*/
	var appendAdditionalDates = function(str){
		$('#list-main').append(str);
	}

	/* takes a single date option
		and returns a string representation with
		the format of thursday, january 30, 2014
	*/
	var buildDateStr = function(d){
		var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

		return d.toLocaleString("en-US", options);
	}

	/* Builds the display view HTML string
	*/
	var buildDisplayStr = function(timeStr, eventStr){

		if(timeStr === undefined){
			timeStr = 'click to add time';
		}

		if(eventStr === undefined){
			eventStr = 'click to add description';
		}

		displayStr = '<h3>' + timeStr + '</h3>' + 
					'<p>' + eventStr + '</p>' + 
					'<div class="delete">x</div>' + 
					'<button class="new-event-but" id="add-event">Add Event</button>'

		return displayStr;
	}

	/* Assembles html string for the event
		input form
	*/
	var buildEventStr = function(timeStr, eventStr){
		
		if(timeStr === undefined){
			timeStr = 'enter event time';
		}

		if(eventStr === undefined){
			eventStr = 'please enter an event description';
		}

		var inputStr = '<div class="event-container">' + 
					'<input class="time-input" value="' + timeStr + '">' +
					'<textarea class="event-input">' +
					'' + eventStr + '</textarea></div>'

		return inputStr;
	};

	/* takes a single array of dates @param dateArray 
		and builds a string of list items containing
		each date in the array
	*/
	var buildEventList = function(dateArray){
		var eventHTML = '';
		var inputEl = buildEventStr();


		 eventHTML = dateArray.map(function(val, i, ary){
			return '<li><h2>' + val + '</h2>' + inputEl + '</li>';
		}).join('');

		return eventHTML;
	};

 	/* Builds the string for the input form
	*/
	var buildInputStr = function(timeStr, eventStr){
		
		if(timeStr === '' || timeStr === 'click to add time'){
			timeStr = 'enter event time';
		}

		if(eventStr === '' || eventStr === 'click to add description'){
			eventStr = 'please enter an event description';
		}		

		var inputStr = '<input class="time-input" value="' + timeStr + '">' +
			'<textarea class="event-input">' +
			'' + eventStr + '</textarea></div>'

		return inputStr;
	};

	/* Used to clear inputs and text boxes of default values
		sideffects
	*/ 
	var checkClear = function(el){
		if(el.val() === 'enter event time'){
			el.val('');
		}else if(el.val() === 'please enter an event description'){
			el.val('');
		}
	}

	/* creates a display of the input form in the .event-container specified by
		@param parentEvent. has side effects on .event-container
	*/
	var createDisplay = function(parentEvent){
		displayStr = buildDisplayStr(parentEvent.find('input').val(), 
			parentEvent.find('textarea').val());

		parentEvent.html('');
		parentEvent.append(displayStr);
	};

	/* creates an input form in the .event-container specified by
		@param parentEvent. has sideffects on .event-container
	*/
	var createForm = function(parentEvent){
		inputStr = buildInputStr(parentEvent.find('h3').text(), 
			parentEvent.find('p').text());

		parentEvent.html('');
		parentEvent.append(inputStr);
	};

	/* removes @param parentEvent (.event-container)
		if it is the only event for the given date it is 
		replaced by a form otherwise it is removed entirely
	*/
	var deleteEvent = function(parentEvent){
		if(parentEvent.siblings('div').length === 0){
			toggleH2Active(parentEvent.siblings('h2'));
			parentEvent.animate({'margin-left': '2000px'}, 500, function(){
				createForm(parentEvent);
				parentEvent.find('input').val('enter event time');
				parentEvent.find('textarea').val('please enter an event description');
			});

			parentEvent.animate({'margin-left': '0px'}, 500);
			
		}else{
			parentEvent.slideToggle(function(){
				parentEvent.remove();
			});
		}
	};

	/* returns an array of a specified length @ param len 
		of date strings starting from the date object 
		passed and incrementing backward requires
		buildDateStr();
	*/
	var getFutureDateArray = function(d, len){
		var ary = []
		var date = d;

		//map
		for(var i = 0; i < len; i++){
			ary.push(buildDateStr(date));
			date.setDate(date.getDate() + 1)
		}
		
		return ary;
	}

	var loadDates = function(){

	}

	/* Has side effects handles building a date and
		displaying the infinitely scrolling dates
	*/
	var loadAdditionalDates = function(){
		var lastDate = $('#list-main li:last-child h2').text();

		if(lastDate === ''){
			var dateArray = getFutureDateArray(new Date(), 40);
		}else{
			var dateArray = getFutureDateArray(new Date(lastDate), 40);
		}

		var eventHTML = buildEventList(dateArray);

		appendAdditionalDates(eventHTML);
	}

	/* Sideffects toggles class active for highlighting
		which li h2 items have events 
	*/
	var toggleH2Active = function(parentEvent){
		parentEvent.toggleClass('active');
	}

	/* handler is attached to all h2 elements in 
		#list-main and triggers the .event-container
		dropdown
	*/
	$(document).on('click', '#list-main h2', function(){
			$(this).siblings().slideToggle();
		});
	
	/* handles a click in an events editable
		time-input field
	*/
	$(document).on('click', '.event-container input', function(){
		checkClear($(this));
	});

	/* handles a click in an events editable
		event-input field
	*/
	$(document).on('click', '.event-container textarea', function(){
		checkClear($(this));
	});

	/* handles transition for non-editable text
		to editable form
	*/
	$(document).on('click', '.event-container p', function(){
		createForm($(this).closest('.event-container'));
	});

	/* handles transition for non-editable text
		to editable form
	*/
	$(document).on('click', '.event-container h3', function(){
		createForm($(this).closest('.event-container'));
	});

	/* Changes tab behavoir to switching in between the
		input and text area
	*/ 
	$(document).on('keydown', '.event-container textarea', function(e){
		if(e.keyCode === 9){
			e.preventDefault();
			$(this).siblings('input').focus();
			checkClear($(this).siblings('input'));

		}
	});

	/* Changes tab behavoir to switching in between the
		input and text area
	*/ 
	$(document).on('keydown', '.event-container input', function(e){
		if(e.keyCode === 9){
			e.preventDefault();
			$(this).siblings('textarea').focus();
			checkClear($(this).siblings('textarea'));

		}
	});

	/* adds a new editable event below the #add-event
		.event-container that was clicked
	*/
	$(document).on('click', '#add-event', function(){
		//change to something indicative of being a DOM element
		//if parameters aren't passed value is undefined
		var eventStr = $(buildEventStr('', ''));
		$(this).closest('.event-container').after(eventStr);
		eventStr.slideToggle();
	});

	/* handles deleting an event
	*/
	$(document).on('click', '.delete', function(){
		deleteEvent($(this).closest('.event-container'));
	});

	/* Handles an enter key down in the text area and sets
		the h2 as active (storing events)
	*/
	$(document).on('keydown', '.event-container textarea', function(e){
		if(e.keyCode === 13){
			toggleH2Active($(this).closest('.event-container').siblings('h2'));
			createDisplay($(this).closest('.event-container'));
		}
	});

	/* Handles an enter key down in the time input
		and sets the h2 as active (storing events)
	*/
	$(document).on('keydown', '.event-container input', function(e){
		if(e.keyCode === 13){
			toggleH2Active($(this).closest('.event-container').siblings('h2'));
			createDisplay($(this).closest('.event-container'));
		}
	});

	/* handler is attached to #return-top-button
		animates a scroll to the top of the document
	*/
	$(document).on('click', '#return-top-button', function(){
		$('html, body').animate({ scrollTop: "0px" });
	});

	/*	handler detects when the user has scrolled to the
		bottom of the document, and loads additional content
	*/
	$(document).on('scroll', function(){
		if($(window).scrollTop() + $(window).height() === $(document).height()){
			loadAdditionalDates();
		}

	})

	/* stores the contents of #list-main in local storage
		when the window is closed or refreshed
	*/
	// $(window).unload(function(){
	// 	localStorage.mainText = $('#list-main').html();
	// });

	/*	appends last session contents of #list-main
	*/
	
	// $('#list-main').html(localStorage.mainText);


	//load initial dates
	loadAdditionalDates();

});