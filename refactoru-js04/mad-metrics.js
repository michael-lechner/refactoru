
var madMetricPageViewed = function(){
	var totalViewedHeight = window.innerHeight + window.scrollY; 
	var totalPageHeight = document.body.scrollHeight;

	// console.log("Scroll Distance: " + window.scrollY);
	// console.log("totalHeightScrolled: " + totalHeightScrolled);
	// console.log("totalScrollableHeight: " + totalScrollableHeight);
	// console.log("Scroll Percent: " + Math.round((totalHeightScrolled / totalScrollableHeight)*100));

	return Math.round((totalViewedHeight / totalPageHeight)*100);
}

var madMetricScrollHeight = function(){
	var totalHeightScrolled = window.scrollY; 
	var totalScrollableHeight = document.body.scrollHeight - window.innerHeight;

	console.log("Scroll Distance: " + window.scrollY);
	console.log("totalHeightScrolled: " + totalHeightScrolled);
	console.log("totalScrollableHeight: " + totalScrollableHeight);
	console.log("Scroll Percent: " + Math.round((totalHeightScrolled / totalScrollableHeight)*100));

	return Math.round((totalHeightScrolled / totalScrollableHeight)*100);
}

var madMetricTotalTime = function(){

	var d = new Date();
	var endTime = d.getTime();

	// console.log("Start Time: " + startTime);
	// console.log("End Time: " + endTime);
	// console.log("Time spent on page: " + ((endTime - startTime)/60000));

	return Math.round((endTime - startTime)*.001);
}

var madMetricSubmitTime = function(){
	var d = new Date();
	submitTime = d.getTime();
	// console.log("Submit Time: " + submitTime);
}

var madMetricsSetup = function(){
	//Background
	var background = document.getElementById('mad-metric-background');

	background.style.backgroundColor="rgba(100,100,100,.7)";
	background.style.width="100%";
	background.style.height="100%";

	//Display
	var display = document.getElementById('mad-metric-display');
	display.style.width="90%";
	display.style.height="50%";

	//Amount of Page Viewed
	var pageViewedPercent = madMetricPageViewed();

	display.innerHTML="<p>percent of page viewed</p>";
	display.innerHTML+="<div id=\"pageViewed\">" + pageViewedPercent + "%</div>";

	var pageViewed = document.getElementById("pageViewed");
	pageViewed.style.width = (pageViewedPercent - 10) + "%";

	//distance scrolled
	var distanceScrolledPercent = madMetricScrollHeight();
	
	display.innerHTML += "<p>total distance scrolled</p>";
	display.innerHTML+="<div id=\"distanceScrolled\">" + distanceScrolledPercent + "%</div>";	

	var distanceScrolled = document.getElementById("distanceScrolled");
	
	if(distanceScrolledPercent <= 10){
		distanceScrolledPercentWidth = 10;
	}else{
		distanceScrolledPercentWidth = distanceScrolledPercent;
	}

	distanceScrolled.style.width = (distanceScrolledPercentWidth - 10) + "%";

	//Time Spent on Page
	var timeSpentOnPage = madMetricTotalTime();

	display.innerHTML += "<p style=\"width: 30%; margin-left: 5%;\">time spent on page</p>";
	display.innerHTML += "<div id=\"time-on-page\">" + timeSpentOnPage + "s </div>";

	//Time Before Until Submit
	var timeUntilSubmit = "null"
	
	if(submitTime !== null){
		timeUntilSubmit = Math.round((submitTime - startTime)*.001);
	}

	display.innerHTML += "<p style=\"width: 30%; float: right; margin-top: -35px; margin-right: 17%;\">time until submit</p>";
	display.innerHTML += "<div id=\"time-until-submit\">" + timeUntilSubmit + "s </div>";


}

var madMetrics = function(){
	
	madMetricsSetup();

}

var scrolled = function(){
	console.log("HIHIHIHIHIHIHI");
}


var d = new Date();
var startTime = d.getTime();

var submitTime = null;

// window.addEventListener("onscroll", scrolled, false);
//window.onscroll = scrolled;





