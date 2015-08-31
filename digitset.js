var underScore = require('lodash');

function DigitSet() {

	this.possibilities = [1,2,3,4,5,6,7,8,9];

}

	DigitSet.prototype.size = function () {
		return this.possibilities.length;
	};

	DigitSet.prototype.set = function(arrayOfDigits){
		this.possibilities = underscore.union(arrayOfDigits);
		// return this.possibilities;
	};

	DigitSet.prototype.add = function(digit) {
		this.possibilities.push(digit);
	};

	DigitSet.prototype.eliminate = function(digit){
		for(var i=0; i<=this.possibilities.length; i++){
			if(digit === this.possibilities[i]){
				this.possibilities.splice(i,1);
			}
		}
		return this.possibilities;
	};

	DigitSet.prototype.eliminate = function(digitSet){
		this.possibilities = underscore.difference(digitSet)
	};
	

	DigitSet.prototype.toString = function() {
		return this.possibilities.join(',');
		//this.possibilities = this.possibilities.join();
	};

	DigitSet.prototype.toArray = function(){
		return this.possibilities.split(",");
	};



	DigitSet.prototype.contains = function(num){
		var counter = false;
		for (var i = 0; i < 8; i++){

		if (this.possibilities[i] === num){
				console.log(this.possibilities[i]);
				counter = true;
			} 
			
		
	}
	return counter;
	};

	DigitSet.prototype.isUncertain = function(){
		if (this.possibilities.length < 1){
			return true;
		} else {
			return false;
		}
	};

//console.log(DigitSet);// for testing only

// probably not needed...
		// add: function(digitSet) {
		// 	//--> undefined, modify original
		// },
		// eliminate: function(digitSet){
		//
		// },

module.exports = DigitSet;


// var niner = new DigitSet();
// niner.set([1,2,3]);
// niner.add(9);
// niner.eliminate(9);
// niner.eliminate(1);
// niner.eliminate(2);
// niner.toString()
// console.log(niner);
