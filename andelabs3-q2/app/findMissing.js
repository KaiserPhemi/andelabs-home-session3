(function(){
	
	'use strict';
	module.exports = {
		findMissing: function(array1, array2){
			
			/*Ternary operation to check input*/
			var checkInput 	= (!(array1 instanceof Array) || !(array2 instanceof Array)) ? "Inputs must be an array":
							  (array1.length === array2.length) ? 0 :
							  (array1.length == 0 && array2.length == 0) ? 0 : findDifference(array1, array2);
			return checkInput;

			/*Function to compute difference*/
			function findDifference(array1, array2){
				
				var filteredArr1 = array1.filter(function(element){
					return array2.indexOf(element) == -1;});

				var	filteredArr2 = array2.filter(function(element){
						return array1.indexOf(element) == -1;});

				return parseInt((filteredArr1.concat(filteredArr2)), 10);
					
				}

			
			}
		};
	

})();