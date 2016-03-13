//function
//alert('hello js');

var marni_shirt = 300;
var marni_earrings = 450;
var stella_dress = 3000;
var checking_account = 1000;

function charge_cc(item_value, brand_name) {
	//the value of the thing we're buying
	//checking account balance
	alert('You will be charged ' + item_value + ' for this ' + brand_name);
	alert('Your checking account balance is ' + checking_account);

	if (checking_account < item_value) {
		if (checking_account <1){
			alert('Insufficient funds');
	} else{
		checking_account = checking_account - item_value;
		alert('Charge successful');
		alert('Checking balance is ' + checking_account);
	}
}}

//jquery
charge_cc()
$('.item').click(function() {
	var item = $(this).data('value');
	debugger;
	//this item
	charge_cc();
});


$('.item').click(function(){
	var item_value = $(this).data('value');
	var brand_name = $(this).data('brand');
	charge_cc(item_value, brand_name);
});
