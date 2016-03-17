var color = "blue";
var wallet = "2222";
var converted_wallet = "0";
var conversion_rate = new Array();
conversion_rate[0] = "0.88"; //EU
conversion_rate[1] = "111.50"; //JYP
conversion_rate[2] = "0.69"; //GBP

document.write(conversion_rate[1]);


function convert_currency(amount, converter){
	wallet = amount;
	conversion_rate[1] = converter;

	if (1==1){
		alert('hi');
	}}



	$('#eu').click(function(){
		alert("it's not working");
	})
