(function(){
	
	'use strict';
	module.exports = {
		findMissing: function(array1, array2){
			
			/*Ternary operation to check input*/
			var checkInput 	= (!(array1 instanceof Array) || !(array2 instanceof Array)) ? "Inputs must be an array":
							  (array1.length == 0 && array2.length == 0) ? 0 : arrayFilter(array1, array2); 

			return checkInput;

			/*Function that compares array inputs*/
			function arrayFilter(array1, array2){

			}

		}

	};
})();