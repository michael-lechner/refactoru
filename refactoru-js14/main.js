/**Counts every marker created
*/
var markerCount = 0;

$(document).on('ready', function(){

	var addMarker = function(x, y){

		var marker = $('<div class="marker" class="#marker">' + 
			'<div class="descrip"></div><img src="gold-bar.png"></div>');

		marker.attr('data-marker-id', markerCount);
		marker.css('top', y);
		marker.css('left', x);

		$('#main-map').append(marker);

		displaySetMarkerDescrip(marker);

		markerCount++;

	}

	var blink = function(selector, togClass, interval){
		setInterval(function(){
			selector.toggleClass(togClass);
			setInterval(function(){
				selector.toggleClass(togClass);
			}, interval);
		}, interval)

	}

	var displaySetMarkerDescrip = function(marker){
		marker.prepend('<div class="descrip-enter"><form><textarea>' + 
			'Please enter a tip for your find' +
			'</textarea><button class="submit-descrip">submit</button></form></div>');
	}

	var setDescrip = function(marker, descrip){
		marker.find('.descrip').append(descrip);
		marker.find('.descrip').css('display', 'none')
	}

	

	blink($('#logo'), 'blink', 1000);


	$(document).on('click', '#main-map', function(e){
		e.stopPropagation();
		var offset = $(this).offset();
		addMarker((e.pageX - offset.left - 25), (e.pageY - offset.top - 25));
	});
	
	$(document).on('click', '.marker', function(e){
		e.stopPropagation();
		$(this).remove();
	});

	$(document).on('click', '.descrip-enter', function(e){
		e.stopPropagation();
		$(this).find('textarea').val('');
	});
	
	$(document).on('click', '.submit-descrip', function(e){
		e.preventDefault();
		e.stopPropagation();
		var text = $(this).prev('textarea').val();
		var marker = $(this).closest('.marker');

		$(this).closest('.descrip-enter').remove();

		setDescrip(marker, text);
	});


	$(document).on('mouseover', '.marker', function(){
		$(this).find('.descrip').css('display', 'inherit');
	});
	$(document).on('mouseout', '.marker', function(){
		$(this).find('.descrip').css('display', 'none');
	});


});