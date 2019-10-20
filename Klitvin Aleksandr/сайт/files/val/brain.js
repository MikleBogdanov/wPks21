$(document).ready(function() {
	
	$('#formSum').on('submit', function(event){
		event.preventDefault();
		

	var numberOne,
		numberTwo,
	 	summ;

	 numberOne = $('#numberOne').val();
	 numberTwo = $('#numberTwo').val();

	 numberOne = parseInt(numberOne);
	 numberTwo =  parseInt(numberTwo); 
	// alert(numberOne);
	// alert(numberTwo);
	
 summ = numberOne + numberTwo;
 //alert(summ);
 $('#sumResult').text(summ);
});
}); 