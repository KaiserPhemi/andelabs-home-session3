(function(){

	'use strict';

	module.exports = [].prototype;


	/*Prototype to find element*/
	Array.prototype.search = function(element){
				
		this.count = 0;
		this.index = -1;

		var baseIndex = 0,
			maxIndex = this.length-1;
	
		while(baseIndex <= maxIndex){

				/*Splits array in half*/				
				var currentIndex = Math.floor((baseIndex + maxIndex)/2); 
				var currentElement = this[currentIndex];


				/*Checks for index of search element*/
				if (this[baseIndex] === element){
					
					this.index = baseIndex;
					break;
				}
				else if(this[maxIndex] === element){
					
					this.index = maxIndex;
					break;
				}

				/*Checks either half of array*/
				if (currentElement < element){
					
					baseIndex = currentIndex + 1;
				}
				else if (currentElement > element){
					
					maxIndex = currentIndex - 1;
				}
				else if(currentElement === element){
					
					this.index = currentIndex;
					break;
				}
				else{
					this.index = currentIndex;
					break;
				}
								
				this.count++;
		}

		return new Detail(this.count, this.index, this.length);


	};


	/*Array of 1 to 20*/
	Array.prototype.toTwenty = function(){

		var counter = 1;
		while(counter <= 20){

			this.push(counter);
			counter ++;
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

		
	/*Object to handle count, length and index*/
	function Detail(count, index, length){
		this.count = count;
		this.index = index;
		this.length = length;
	}

})();