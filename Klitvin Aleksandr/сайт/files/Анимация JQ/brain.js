$(document).ready(function() {
	$('#customWidth').on('click', function(){
		$('#testBox').animate({'width': '200px'},1000);
	});
	$('#remuveWidth').on('click', function(){
		$('#testBox').animate({'width': '400px'},1000);
	});
	$('#customOpacity').on('click', function(){
			$('#testBox').animate({'opacity': '0'}, 1000);
	});
	$('#remuveOpacity').on('click', function(){
			$('#testBox').animate({'opacity': '100'}, 1000);
	});
	$('#hide').on('click', function(){
		$('#testBox').hide(1000);
	});
	$('#show').on('click', function(){
		$('#testBox').show(1000);
	});
	$('#hideAndShow').on('click', function(){
		$('#testBox').hide(300).delay(300).show(300);
	});
	$('#fadeOut').on('click', function(){
		$('#testBox').fadeOut(1000);
	});
	$('#fadeIn').on('click', function(){
		$('#testBox').fadeIn(1000);
	});
	$('#fadeToggle').on('click', function(){
		$('#testBox').fadeToggle(1000);
	});
	$('#slideUp').on('click', function(){
		$('#testBox').slideUp(1000);
	});
	$('#slideDown').on('click', function(){
		$('#testBox').slideDown(1000);
	});
	$('#slideToggle').on('click', function(){
		$('#testBox').slideToggle(1000);
	});
});