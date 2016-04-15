record_time();
run_clock();

function record_time() {
	now = new Date();
	var date = now.getDate();
	var month = now.getMonth() + 1;
	var hours = now.getHours();
	var minutes = now.getMinutes();
  var elapsed = timeStamp - $.cookie("current_time");
	var current_time = hours + ' ' + minutes;

	var timeStamp = Math.floor(Date.now() / 1000);
  $.cookie('current_time', current_time);
	$.cookie("current_time", timeStamp);

var bluramount = elapsed * .1;
	var newval = "blur(" + bluramount + "px)";
$(".letter-wrapper").css("-webkit-filter",newval);

}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();

  if (year == "2016") {
    year = "twenty" + "sixteen" 
  } else if (year == "2017") {
    year = "twenty" + "seventeen"
  } else if (year == "2018") {
    year = "twenty" + "eighteen"
  } else if (year == "2019") {
    year = "twenty" + "nineteen"
  } else if (year == "2020") {
    year = "two" + "thousand" + "twenty"
  }

  if (date == "1") {
    date = "first";
  } if (date =="2") {
    date = "second";
  } if (date =="3") {
    date = "third";
  } if (date =="4") {
    date = "fourth";
  } if (date =="5") {
    date = "fifth";
  } if (date =="6") {
    date = "sixth";
  } if (date =="7") {
    date = "seventh";
  } if (date =="8") {
    date = "eighth"; 
  } if (date =="9") {
    date = "ninth";
  } if (date =="10") {
    date = "tenth";
  } if (date == "11") {
    date = "eleventh";
  } if (date =="12") {
    date = "twelfth";
  } if (date =="13") {
    date = "thirteenth";
  } if (date =="14") {
    date = "fourteenth";
  } if (date =="15") {
    date = "fifteenth";
  } if (date =="16") {
    date = "sixteenth";
  } if (date =="17") {
    date = "seventeenth";
  } if (date =="18") {
    date = "eighteenth";
  } if (date = "19") {
    date = "nineteenth";
  } if (date = "20") {
    date = "twentieth";
  } if (date = "21") {
    date = "twenty"+"first";
  } if (date = "22") {
    date = "twenty"+"second";
  }

  if (hour == "1") {
    hour = "one";
  } else if (hour =="2") {
    hour = "two";
  } else if (hour =="3") {
    hour = "three";
  } else if (hour =="4") {
    hour = "four";
  } else if (hour =="5") {
    hour = "five";
  } else if (hour =="6") {
    hour = "six";
  } else if (hour =="7") {
    hour = "seven";
  } else if (hour =="8") {
    hour = "eight";
  } else if (hour =="9") {
    hour = "nine";
  } else if (hour =="10") {
    hour = "ten";
  } else if (hour =="11") {
    hour = "eleven";
  } else if (hour =="12") {
    hour = "twelve";
  }

  if (min=="1") {
    min = "one";
  } else if (min=="2"){
    min = "two";
  } else if (min=="3"){
    min = "three";
  } else if (min=="4"){
    min = "four";
  } else if (min=="5"){
    min = "five";
  } else if (min=="6"){
    min = "six";
  } else if (min=="7"){
    min = "seven";
  } else if (min=="8"){
    min = "eight";
  } else if (min=="9"){
    min = "nine";
  } else if (min=="10"){
    min = "ten";
  } else if (min=="11"){
    min = "eleven";
  } else if (min=="12"){
    min = "twelve";
  } else if (min=="13"){
    min = "thirteen";
  } else if (min=="14"){
    min = "fourteen";
  } else if (min=="15"){
    min = "fifteen";
  } else if (min=="16"){
    min = "sixteen";
  } else if (min=="17"){
    min = "seventeen";
  } else if (min=="18"){
    min = "eighteen";
  } else if (min=="19"){
    min = "nineteen";
  } else if (min=="20"){
    min = "twenty";
  } else if (min=="21"){
    min = "twenty"+" one";
  } else if (min=="22"){
    min = "twenty"+" two";
  } else if (min=="23"){
   	min = "twenty"+" three";
  } else if (min=="24"){
    min = "twenty"+" four";
  } else if (min=="25"){
    min = "twenty"+" five";
  } else if (min=="26"){
    min = "twenty"+" six";
  } else if (min=="27"){
    min = "twenty"+" seven";
  } else if (min=="28"){
    min = "twenty"+" eight";
  } else if (min=="29"){
    min = "twenty"+" nine";
  } else if (min=="30"){
    min = "thirty";
  } else if (min=="31"){
    min = "thirty"+" one";
  } else if (min=="32"){
   	min = "thirty"+" two";
  } else if (min=="33"){
    min = "thirty"+" three";
  } else if (min=="34"){
    min = "thirty"+" four";
  } else if (min=="35"){
    min = "thirty"+" five";
  } else if (min=="36"){
    min = "thirty"+" six";
  } else if (min=="37"){
    min = "thirty"+" seven";
  } else if (min=="38"){
    min = "thirty"+" eight";
  } else if (min=="39"){
    min = "thirty"+" nine";
  } else if (min=="40"){
    min = "forty";
  } else if (min=="41"){
    min = "forty"+" one";
  } else if (min=="42"){
    min = "forty"+" two";
  } else if (min=="43"){
    min = "forty"+" three";
  } else if (min=="44"){
    min = "forty"+" four";
  } else if (min=="45"){
    min = "forty"+" five";
  } else if (min=="46"){
    min = "forty"+" six";
  } else if (min=="47"){
    min = "forty"+" seven";
  } else if (min=="48"){
    min = "forty"+" eight";
  } else if (min=="49"){
    min = "forty"+" nine";
  } else if (min=="50"){
    min = "fifty";
  } else if (min=="51"){
    min = "fifty"+" one";
  } else if (min=="52"){
    min = "fifty"+" two";
  } else if (min=="53"){
    min = "fifty"+" three";
  } else if (min=="54"){
    min = "fifty"+" four";
  } else if (min=="55"){
    min = "fifty"+" five";
  } else if (min=="56"){
    min = "fifty"+" six";
  } else if (min=="57"){
    min = "fifty"+" seven";
  } else if (min=="58"){
    min = "fifty"+" eight";
  } else if (min=="59"){
    min = "fifty"+" nine";
  } 
  
  var time = month + ' ' + date + ' ' + year + ' ' + hour + ' ' + min;

  return time;
}


function run_clock() {

    var timeStamp = Math.floor(Date.now() / 1000);
    
    var elapsed = timeStamp - $.cookie("current_time");

    // console.log(elapsed);
     var lastvisited = timeConverter($.cookie("current_time"));
    // var lastvisited = 'april' + 'fourteen';

    for (i = 0; i < lastvisited.length; i++) {
    // console.log(lastvisited[i]);
      if (lastvisited[i] != ' ') {
      	var letter = '.letter-wrapper.' + lastvisited[i],

      	to_clone = $(letter).clone();

      	$('.baseline').append(to_clone);
        $('.content-container').hide();

      }

      if (lastvisited != ' ') {
        $('.letter').removeClass("hide");
      }

    }
  }

// console.log(timeConverter($.cookie("current_time")));
