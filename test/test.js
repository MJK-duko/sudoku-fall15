var grid = require("../grid.js");
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;


expect(grid).to.be.a('object');
expect(sBoard).to.be.a('array');
------------------------------------------------------------

var DigitSet = (function() {
	var arr = [1,2,3,4,5,6,7,8,9];

	possibilities = function(id){
		

		var valueOfSq = function(num){
			if (num === '.'){
				return arr;
			} else {
				return num;
			}
		},

		eliminate function(known){
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
			}

		}
	}
		return possibilities;
	})();

var test = new DigitSet();