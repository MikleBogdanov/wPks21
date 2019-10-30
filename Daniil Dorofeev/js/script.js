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
		$('h1, .skill i, p, a').css('color', '#ddd');
		$('.menu-top i').css('color', '#ddd');
		$('.block, footer').css('background-color', '#303030');
		$('.container img').css('border', '2px solid #ddd');
		$('.theme i').css('color', '#f5f5f5');
		$('.theme p').html('Дневная тема');
		$('.theme i').removeClass('far fa-moon');
		$('.theme i').addClass('fas fa-sun');
		$('.theme').css('border', '2px solid #ddd');
	}
	if(currentTheme == 2) {
		$('body').css('background-color', '#f5f5f5');
		$('h1, .skill i, p, a').css('color', '#222');
		$('.menu-top i').css('color', '#4baff2');
		$('.block, footer').css('background-color', 'white');
		$('.container img').css('border', '2px solid #ddd');
		$('.theme i').css('color', '#222');
		$('.theme').css('background-color', '');
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

$('.theme').hover(function() {
	$('.theme').css('background', '#303030');
	$('.theme i').css('color', '#f5f5f5');
	$('.theme p').css('color', '#f5f5f5');
}, function() {
	$('.theme').css('background', '#f5f5f5');
	$('.theme i').css('color', '#222');
	$('.theme p').css('color', '#222');
});

function loadingFadeOut() {
	$('.loading-container').fadeOut(400);
	$('html').css('overflow-y', 'visible');
}

$(document).ready(function() {
	setTimeout(loadingFadeOut, 1500);
});