(function(){
	
	'use strict';
	module.exports = {
		findMissing: function(array1, array2){
			
			/*Ternary operation to check input*/
			var checkInput 	= (!(array1 instanceof Array) || !(array2 instanceof Array)) ? "Inputs must be an array":
							  (array1.length == 0 && array2.length == 0) ? 0 : findDifference(array1, array2);
			return checkInput;

			/*Function to compute difference*/
			function findDifference(array1, array2){

			
			}
		}


	};
	

})();