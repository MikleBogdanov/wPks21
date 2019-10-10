$(document).ready(function(){

	function scrollTo(x){
		$([document.documentElement, document.body]).animate({
			scrollTop: $('#' + x).offset().top
			}, 200);