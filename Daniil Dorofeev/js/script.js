$('.menu').hover(function() {
	$('.linear-gradient').css({
		right: '0%'
	});
}, function() {
	$('.linear-gradient').css({
		right: '100%'
	});
});

var currentTheme = 1;

$('.theme').click(function(event) {
	if(currentTheme == 1) {
		$('body').css('background-color', '#222');
		$('h1, i, p, a').css('color', '#ddd');
		$('.block, footer').css('background-color', '#303030');
		$('.container img').css('border', '2px solid #ddd');
		$('.theme p').html('Дневная тема');
		$('.theme i').removeClass('far fa-moon');
		$('.theme i').addClass('fas fa-sun');
		$('.theme').css('border', '2px solid #ddd');
	}
	if(currentTheme == 2) {
		$('body').css('background-color', '#f5f5f5');
		$('h1, i, p, a').css('color', '#222');
		$('.block, footer').css('background-color', 'white');
		$('.container img').css('border', '2px solid #ddd');
		$('.theme p').html('Ночная тема');
		$('.theme i').removeClass('fas fa-sun');
		$('.theme i').addClass('far fa-moon');
		$('.theme').css('border', '2px solid #222');
	}
	if(currentTheme == 1) {
		currentTheme = 2;
	} else {
		currentTheme = 1;
	}
});