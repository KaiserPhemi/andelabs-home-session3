(function(){

	'use strict';

	module.exports = [].prototype;


	/*Array of 1 to 20*/
	Array.prototype.toTwenty = function(){

		var counter = 1;

		while(counter <= 20){

			this.push(counter);
			counter++;
		}
		return this;
	};

	/*Array for multiples of 2 to 40*/
	Array.prototype.toForty = function(){

		var counter = 2;

		while(counter <= 40){

			this.push(counter);
			counter += 2;
		}
		return this;
	};

	/*Array for multiples of 10 to 1000*/
	Array.prototype.toOneThousand = function(){

		var counter = 10;

		while(counter <= 1000){

			this.push(counter);
			counter += 10;
		}
		return this;	
	};

	
})();