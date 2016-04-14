$(document).ready(function() {

	$('.letter').toggle("hide");

});

record_time();
run_clock();


function run_clock() {

    var timeStamp = Math.floor(Date.now() / 1000);
    
    var elapsed = timeStamp - $.cookie("current_time");

    console.log(elapsed);
    var lastvisited = timeConverter($.cookie("current_time"));
    
    for (i=0; i < lastvisited.length; i++) {
      console.log(lastvisited[i]);

      $(".letter").append(lastvisited[i]);
    }

      if (lastvisited[i] == "A") {

        $(".a").show();
      }

      else if (lastvisited[i] == "p") {

        $(".p").show();
   }
  }

console.log(timeConverter($.cookie("current_time")));

function record_time() {
	now = new Date();
	var date = now.getDate();
	var month = now.getMonth() + 1;
	var hours = now.getHours();
	var minutes = now.getMinutes();
  var elapsed = timeStamp - $.cookie("current_time");
	var current_time = hours + ':' + minutes;

	var timeStamp = Math.floor(Date.now() / 1000);
  $.cookie('current_time', current_time);
	$.cookie("current_time", timeStamp);

var bluramount = elapsed * .1;
	var newval = "blur(" + bluramount + "px)";
$(".letter").css("-webkit-filter",newval);

}

console.log($.cookie("current_time"));

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();

  if (hour == "1") {
    hour = "ONE";
  } else if (hour =="2") {
    hour = "TWO";
  } else if (hour =="3") {
    hour = "THREE";
  } else if (hour =="4") {
    hour = "FOUR";
  } else if (hour =="5") {
    hour = "FIVE";
  } else if (hour =="6") {
    hour = "SIX";
  } else if (hour =="7") {
    hour = "SEVEN";
  } else if (hour =="8") {
    hour = "EIGHT";
  } else if (hour =="9") {
    hour = "NINE";
  } else if (hour =="10") {
    hour = "TEN";
  } else if (hour =="11") {
    hour = "ELEVEN";
  } else if (hour =="12") {
    hour = "TWELVE";
  }

  if (min=="1") {
    min = "ONE";
  } else if (min=="2"){
    min = "TWO";
  } else if (min=="3"){
    min = "THREE";
  } else if (min=="4"){
    min = "FOUR";
  } else if (min=="5"){
    min = "FIVE";
  } else if (min=="6"){
    min = "SIX";
  } else if (min=="7"){
    min = "SEVEN";
  } else if (min=="8"){
    min = "EIGHT";
  } else if (min=="9"){
    min = "NINE";
  } else if (min=="10"){
    min = "TEN";
  } else if (min=="11"){
    min = "ELEVEN";
  } else if (min=="12"){
    min = "TWELVE";
  } else if (min=="13"){
    min = "THIRTEEN";
  } else if (min=="14"){
    min = "FOURTEEN";
  } else if (min=="15"){
    min = "FIFTEEN";
  } else if (min=="16"){
    min = "SIXTEEN";
  } else if (min=="17"){
    min = "SEVENTEEN";
  } else if (min=="18"){
    min = "EIGHTEEN";
  } else if (min=="19"){
    min = "NINETEEN";
  } else if (min=="20"){
    min = "TWENTY";
  } else if (min=="21"){
    min = "TWENTY"+" ONE";
  } else if (min=="22"){
    min = "TWENTY"+" TWO";
  } else if (min=="23"){
    min = "TWENTY"+" THREE";
  } else if (min=="24"){
    min = "TWENTY"+" FOUR";
  } else if (min=="25"){
    min = "TWENTY"+" FIVE";
  } else if (min=="26"){
    min = "TWENTY"+" SIX";
  } else if (min=="27"){
    min = "TWENTY"+" SEVEN";
  } else if (min=="28"){
    min = "TWENTY"+" EIGHT";
  } else if (min=="29"){
    min = "TWENTY"+" NINE";
  } else if (min=="30"){
    min = "THIRTY";
  } else if (min=="31"){
    min = "THIRTY"+" ONE";
  } else if (min=="32"){
    min = "THIRTY"+" TWO";
  } else if (min=="33"){
    min = "THIRTY"+ " THREE";
  } else if (min=="34"){
    min = "THIRTY"+" FOUR";
  } else if (min=="35"){
    min = "THIRTY"+" FIVE";
  } else if (min=="36"){
    min = "THIRTY"+" SIX";
  } else if (min=="37"){
    min = "THIRTY"+" SEVEN";
  } else if (min=="38"){
    min = "THIRTY"+" EIGHT";
  } else if (min=="39"){
    min = "THIRTY"+" NINE";
  } else if (min=="40"){
    min = "FORTY";
  } else if (min=="41"){
    min = "FORTY"+" ONE";
  } else if (min=="42"){
    min = "FORTY"+" TWO";
  } else if (min=="43"){
    min = "FORTY"+" THREE";
  } else if (min=="44"){
    min = "FORTY"+" FOUR";
  } else if (min=="45"){
    min = "FORTY"+" FIVE";
  } else if (min=="46"){
    min = "FORTY"+" SIX";
  } else if (min=="47"){
    min = "FORTY"+" SEVEN";
  } else if (min=="48"){
    min = "FORTY"+" EIGHT";
  } else if (min=="49"){
    min = "FORTY"+" NINE";
  } else if (min=="50"){
    min = "FIFTY";
  } else if (min=="51"){
    min = "FIFTY"+" ONE";
  } else if (min=="52"){
    min = "FIFTY"+" TWO";
  } else if (min=="53"){
    min = "FIFTY"+" THREE";
  } else if (min=="54"){
    min = "FIFTY"+" FOUR";
  } else if (min=="55"){
    min = "FIFTY"+" FIVE";
  } else if (min=="56"){
    min = "FIFTY"+" SIX";
  } else if (min=="57"){
    min = "FIFTY"+" SEVEN";
  } else if (min=="58"){
    min = "FIFTY"+" EIGHT";
  } else if (min=="59"){
    min = "FIFTY"+" NINE";
  } else if (min=="60"){
    min = "SIXTY";
 }
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;

  return time;
}
