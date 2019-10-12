$('.menu').hover(function() {
	$('.linear-gradient').css({
		right: '0%'
	});
}, function() {
	$('.linear-gradient').css({
		right: '100%'
	});
});

$('.night-on').click(function(event) {
	$('body').css('background-color', '#222');
	$('h1, i, p, a').css('color', '#ddd');
	$('.block, footer').css('background-color', '#303030');
	$('.container img').css('border', '2px solid #ddd');
	$('div').removeClass('.night-on');
});