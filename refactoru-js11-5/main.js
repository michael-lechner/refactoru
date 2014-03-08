function timeEl(hours, minutes, isPM){
	this.hours = hours;
	this.minutes = minutes;
	this.isPM = isPM
}

var updateTime = function(){
	setInterval(function(){
		getTime();
	}, 1000);
}

var getTime = function(){
		var hours = new Date();
		var minutes = new Date();
		var isPM = false;

		hours = hours.getHours();
		minutes = minutes.getMinutes();

		if(hours > 12){
			hours -= 12;
			isPM = true;
		}

		if(minutes < 10){
			minutes = "0" + minutes;
		}

		drawClock(new timeEl(hours, minutes, isPM));
}

var drawClock = function(timeEl){
	var outerShell = $('<div class="outer-shell" id="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell" id="inner-shell"></div>');
	var periodContainer = $('<div class="period-container" id="period-container"></div>');
	var mainContainer = $('.container');
	var pm = $('<div class="period">PM</div>');
	var auto = $('<div class="period">Auto</div>');
	var display = $('<div class="display" id="display"></div>');
	var selector = $('<div class="selector">&#149;</div>');
	var time = $('<div class="time">{hours}:{minutes}</div>'.supplant(timeEl));
	var freq1 = $('<div class="freq"></div>');
	var amFrequencies = $('<ul><li>AM<li>53<li>60<li>70<li>90<li>110<li>140<li>170<li>KHz</ul>');
	var freq2 = $('<div class="freq pm"></div>');
	var fmFrequencies = $('<ul><li>PM<li>88<li>92<li>96<li>102<li>106<li>108<li>MHz</ul>');

	mainContainer.empty();

	mainContainer.append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(periodContainer);
	
	periodContainer.append(pm);
	periodContainer.append(auto);

	innerShell.append(display);
	display.append(selector);
	display.append(time);

	innerShell.append(freq1);
	freq1.append(amFrequencies);
	innerShell.append(freq2);
	freq2.append(fmFrequencies);

	if(timeEl.isPM){
		$('.selector').css('visibility', 'visible');
	}
}


$(document).on('ready', function(){
	getTime();
	updateTime();

});

