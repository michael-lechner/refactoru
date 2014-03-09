var addScrolled = function(){
	scrollEnd = window.scrollY;
	totalScroll += Math.abs(scrollEnd - scrollStart);
	scrollStart = scrollEnd;
}

var calcPercentViewed = function(maxScroll){

	var totalViewedHeight = window.innerHeight + maxScroll; 
	var totalPageHeight = document.body.scrollHeight;

	// console.log("Max Scroll: " + maxScroll);
	// console.log("Total Viewed Height: " + totalViewedHeight);
	// console.log("Total Page Height: " + totalPageHeight);

	return Math.round((totalViewedHeight / totalPageHeight)*100);
}

var calcPercentViewedSection = function(){
	var percentViewedSection = [];
	var totalViewTime = 0;

	for(var i = 0; i < sectionTime.length; i++){
		percentViewedSection[i] = sectionTime[i];
	}

	for(i = 0; i < percentViewedSection.length; i++){
		totalViewTime += percentViewedSection[i];
	}

	for(i = 0; i < percentViewedSection.length; i++){
		percentViewedSection[i] = percentViewedSection[i] / totalViewTime;
		percentViewedSection[i] = Math.round((percentViewedSection[i])*100);
	}

	// console.log("time in secs: " + percentViewedSection);
	// console.log("total viewed time: " + totalViewTime);
	// console.log("percent time: " + percentViewedSection);

	return percentViewedSection;
}

var calcSubmitTime = function(){
	var d = new Date();
	submitTime = Math.round(((d.getTime() - startTime)*0.001));
	// console.log("Submit time: " + submitTime)
}

var closeContainer = function(){

	location.reload();

	// var container = document.getElementById("mad-metric-container");
	// var percentViewed = document.getElementById("percent-viewed").remove();
	// var percentViewedTag = document.getElementById("percent-viewed-tag").remove();
	// var totalScrolled = document.getElementById("total-scrolled").remove();
	// var totalScrolledTag = document.getElementById("total-scrolled-tag").remove();
	// var submit = document.getElementById("submit-time").remove();
	// var submitTag = document.getElementById("submit-time-tag").remove();

	// container.style.width="0%";
	// container.style.height="0%";

}

var drawDisplayMetrics = function(){
	var container = document.getElementById("mad-metric-container");
	container.innerHTML = 
	"<div id=\"mad-metric-display\" style=\"position: absolute; top: 100px; left: 20%; background-color: #fff; width: 60%;\"></div>";

	var display = document.getElementById("mad-metric-display");
}

var loading = function(){
	drawDisplayMetrics();
	timePerSection();
}

var madMetrics = function(){
	var container = document.getElementById("mad-metric-container");
	var display = document.getElementById("mad-metric-display");
	var percentViewed = calcPercentViewed(maxScroll);
	var percentViewedSection = calcPercentViewedSection();


	container.style.backgroundColor="rgba(100,100,100,.7)";
	container.style.width="100%";
	container.style.height="100%";

	//Percent Viewed
	display.innerHTML += "<div id=\"percent-viewed\">" + percentViewed + 
		"%</div><h2 id=\"percent-viewed-tag\">of page viewed</h2>";

	//Total Scrolled
	display.innerHTML += "<div id=\"total-scrolled\">" + totalScroll + 
		"</div><h2 id=\"total-scrolled-tag\">pixels scrolled</h2>"; 

	//Time until pressing submit
	display.innerHTML += "<div id=\"submit-time\">" + submitTime + 
		"</div><h2 id=\"submit-time-tag\">seconds until submit clicked</h2>"; 

	//Time per section

	display.innerHTML += "<div id=\"section-time-tag\">Time per section</div>";

	for(var i = 0; i < percentViewedSection.length; i++){
		
		if(i === (percentViewedSection.length - 1)){
			display.innerHTML += "<div id=\"section-time-last\" style=\"width: " + (percentViewedSection[i])
			+ "%\">section " + i + ":  " + percentViewedSection[i] + "%</div>";
		}else{
			display.innerHTML += "<div id=\"section-time\" style=\"width: " + percentViewedSection[i] 
			+ "%\">section " + i + ":  " + percentViewedSection[i] + "%</div>";
		}
	}
}

var pageViewed = function(){
	if(maxScroll < window.scrollY){
		maxScroll = window.scrollY;
	}
}

var scrolling = function(){
	pageViewed();
	addScrolled();
	//var targetSection = timePerSection();
	timePerSection();
	//console.log("I'm in section: " + targetSection);
}

var timePerSection = function(){
	var scrollPosition = window.scrollY;

	//console.log("Window Height: " + window.innerHeight);
	//console.log("Total Height: " + document.body.scrollHeight);
	//console.log("Total Sections: " + Math.floor(document.body.scrollHeight/window.innerHeight));

	var numSections = Math.floor(document.body.scrollHeight/window.innerHeight)
	var sections = [];
	var targetSection = [];
	var timeSpentInSection = 0;
	var d = new Date();


	//If time spent in a section is less than one second it is counted
	//as zero to account for scrolling through.
	endTimeSection = d.getTime();
//	timeSpentInSection = Math.round(((endTimeSection - startTimeSection)*0.001));
	timeSpentInSection = ((endTimeSection - startTimeSection));
	//console.log("start time: " + (startTimeSection*.001));
	//console.log("end time: " + (endTimeSection*.001));
	//console.log("difference: " + ((endTimeSection*.001) - (startTimeSection*.001)));
	//console.log("Time spent in section: " + timeSpentInSection);
	startTimeSection = endTimeSection;


	//endTimeSection = Math.round(((d.getTime() - startTime)*0.001));



	//setup array to store times
	if(sectionTime.length === 0){
		sectionTime = new Array();
		for(var i = 0; i < numSections; i++){
			sectionTime.push(0);
		}
	}

	// setup array to store sections
	for(i = 0; i < numSections + 1; i++ ){
		sections[i] = window.innerHeight*i;
	}

	console.log("I'm in position: " + scrollPosition);
	console.log("Sections: " + sections);

	for(i = 0; i < numSections; i++){

		if(scrollPosition >= sections[i] && scrollPosition < sections[i + 1]){
			targetSection = i;
			sectionTime[targetSection] += timeSpentInSection;
			console.log("Section Times: " + sectionTime);
			return targetSection;
		}

	}

	return null;

}

var maxScroll = 0;

var scrollStart = window.scrollY;
var scrollEnd = 0;
var totalScroll = 0;
var sectionTime = [];

var d = new Date();
var startTime = d.getTime();
var submitTime = null;
var startTimeSection = d.getTime();
var endTimeSection = 0;


window.onload = loading();
window.onscroll = scrolling;









