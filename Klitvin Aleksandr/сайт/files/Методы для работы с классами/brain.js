$(document).ready(function() {
	
$('#addGreen').on('click', function(){
	$('#testBox').addClass('greenBg');
});

$('#removeGreen').on('click', function(){
	$('#testBox').removeClass('greenBg')
});

$('#toggleGreen').on('click', function(){
	$('#testBox').toggleClass('greenBg');
});
$('#customCSS').on('click', function(){
$('#testBox').css('border', '40px solid red');
});
$('#removeCSS').on('click', function(){
$('#testBox').css('border', '0px');
});
});