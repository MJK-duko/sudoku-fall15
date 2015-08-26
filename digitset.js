var underScore = require('lodash');
var grid = require('./grid');

function DigitSet() {
	
	var arr = [1,2,3,4,5,6,7,8,9];
	this.possibilities = arr
		
		valueOfSq: function(num){
			if (num === '.'){
				return arr;
			} else {
				return num;
			}
		},

		eliminate: function(known){
			for(i=0; i<=arr.length; i++){
				if(known === this.arr[i]){
					this.arr.splice(i,1);
				}
			}
		},		
		
		contains: function(num){
			return (num in arr);

		},

		isInError: function(){
			if (arr.length < 1){
				return true;
			} else {
				return false;
			},
		}
		
		size: function () {
		// --> integer 0-9; how many digits are possible here
		},

		set: function(arrayOfDigits){

		},

		add: function(digit) {
			//--> undefined, modify original
		},

		add: function(digitSet) {
			//--> undefined, modify original
		},

		eliminate: function(digit){
			//--> modify
		}, 

		eliminate: function(digitSet){

		},

		toString: function() {
			//--> string of digits in set
		},

		toArray: function(){
			// --> array of digits
		},

		isUncertain: function(){
		// --> boolean
		},

		contains: function(digit) {
		//	--> boolean
		},

		
	}
		return possibilities;
	}

//console.log(DigitSet);// for testing only

module.exports = DigitSet;


var newThing = new DigitSet();














