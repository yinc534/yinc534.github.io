// $('.button').click(function(){
// 	$('body').prepend('<img src="http://www.petakids.com/wp-content/uploads/2015/11/Cute-Red-Bunny.jpg">');
// });

// PREPEND PLACES THE BUNNY IMAGE BEFORE THE 'BUTTON' THAT IS CREATED


// APPENDING - ADDING IT TO THE LAST ELEMENT IT FINDS, AFTER THE 'START HERE' TEXT

$('.button').click(function(){

	// APPEND OBJECTS IN THE BODY
	// $('body').append(objects[1]);

var objects = ["1", "2", "3", "4", "5", "6"];

var result = '<span class="' + color_to_use + '"">' + object_to_use + '</span>';

$('.content').append(objects[random_object]);

$('.content').append(result);
console.log(random_color_number);

$('.content').append(result);

var objects = ['assets/img/okay.jpg', 'assets/img/troll.png', 'assets/img/pepe.jpg', 'assets/img/jiggly.jpg'];

var colors = ["red", "blue", "yellow", "green"];
var result = '';

var color_to_use = colors[random_color_number];
var object_to_use = objects[random_object_number];
var random_color_number = Math.floor(Math.random()* colors.length);
var random_object_number = Math.floor(Math.random()* objects.length);

var result = '<img class="' + color_to_use + '" src="' + object_to_use + '</img>';

$('body').prepend(result);


});