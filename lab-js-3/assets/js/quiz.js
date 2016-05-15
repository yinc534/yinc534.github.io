$('.list-item').click(function() {
	$('.list-item').removeClass('active');
	$(this).addClass('active');

	var button_name = $(this).data('button');
	$('.content').attr('class', 'section content');
	$('.content').addClass(button_name);

	if (button_name == 'helloworld') {
		$('.hello').removeClass('hide');
	}
});

$('.close').click(function(){
	$('.hello').addClass('hide');
	$('.list-item').removeClass('active');
});

$('.close').click(function(){
	$('.yo').addClass('hide');
	$('.list-item').removeClass('active');
});