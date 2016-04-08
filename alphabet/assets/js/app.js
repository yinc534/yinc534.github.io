// $(document).ready(function() {

// 	$('.letter').addClass("hide")

// });

record_time();
run_clock();


function record_time() {
	now = new Date();
	var date = now.getDate();
	var month = now.getMonth() + 1;
	var hours = now.getHours();
	var minutes = now.getMinutes();

	var current_time = hours + ':' + minutes;

	$.cookie('current_time', current_time);

}


function run_clock() {

	console.log($.cookie("current_time"));

	// var now = checkTime();
	// var letter = document.getElementById('letter');
	// var letterClass = []

	// updateClock();
	// // setInterval(updateClock, 3000);

	// function updateClock() {
	// 	now = checkTime();

	// 	if (now.date == 7 && now.month == 4) {
	// 		console.log($.cookie("username"));
	// 	}

	// }
}

