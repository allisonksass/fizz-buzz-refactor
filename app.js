$( document ).ready(function() {

var inputValue = prompt("Pick a number to Fizz Buzz!");
inputValue = parseInt(inputValue, 10);


if (inputValue % 1 === 0 && inputValue >= 1 && inputValue <= 100) 
			{

			fizzbuzz(inputValue);

			} 

		else 

			{
			alert("You must enter a whole number between 1 and 100");
			}



function fizzbuzz(){

for (i=1; i<=inputValue; i++) {

if ( i % 3 ==0) {
	if (i % 5 ==0) {
		$("#body").append('Fizz Buzz'); }
	else {
	$("#body").append('Fizz'); 
	}
}

else if ( i % 5 == 0){
	$("#body").append('Buzz'); 
}


else {
	$("#body").append(i); 
}

$("#body").append("<br>");


}

}

});