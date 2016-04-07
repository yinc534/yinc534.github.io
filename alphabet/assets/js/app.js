$(document).ready(function() {

	$('.letter').addClass("hide")

})

window.onload = runClock;


function checkTime() {
	now = new Date();
	var date = now.getDate();
	var month = now.getMonth() + 1;
	var hours = now.getHours();
	var minutes = now.getMinutes();

	return {
		hours : hours,
		minutes : minutes,
		date : date,
		month : month,
	}
}


function runClock() {

	var now = checkTime();
	var letter = document.getElementById('letter');
	var letterClass = []

	updateClock();
	setInterval(updateClock, 3000);

	function updateClock() {
		now = checkTime();

		if (now.date == 7 && now.month == 4) {
			console.log($.cookie("username"));
		}

	}
}


document.cookie="username=John Doe";


