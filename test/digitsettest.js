var DigitSet = require("../digitset.js");
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

// describe('Grid constructor', function() {
//
// 	describe('cells()', function() {
// 		var gridTester = new Grid("............942.8.16.....29........89.6.....14..25......4.......2...8.9..5....7..");
// 	  	it('should return array of all cell tokens', function() {
// 	    	expect(gridTester.cells).to.be([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
// 	    });
// 	  }),

describe('DigitSet testing', function() {


//size ----- IS WORKING
  describe('The size of the DigitSet', function() {
    var dTester = new DigitSet();
    it('should be equal to 9', function() {
      expect(dTester.size()).to.equal(9);
    });
  }),



//set ---- IS WORKING
   describe('The digitSet set function can accept a new array', function() {
    var dTester = new DigitSet();

    before( function(){
      dTester.set([1,2,3]);

    });
    it('should return an array of digits', function() {
      expect(dTester.possibilities).to.deep.equal([1,2,3]);
    });
  }),

/*  DigitSet.prototype.set = function(arrayOfDigits){
    this.possibilities = arrayOfDigits;
    // return this.possibilities;
  };*/


//add --- IS WORKING
   describe('The digitSet can be added into', function() {
    var dTester = new DigitSet();

    before(function(){
      dTester.add(10);
    });


    it('should add a new number to the array', function() {
      expect(dTester.possibilities).to.include(10);
    });
  }),

//expect([1,2,3]).to.include(2);

//eliminate
   describe('The DigitSet be able to eliminate', function() {
     var dTester = new DigitSet();

     before(function() {
      dTester.eliminate(7);
    });

    it('should eliminate one or more indexes from array', function() {
      expect(dTester.possibilities).to.not.include(7);
    });
  }),



//toString
   describe('The digitSet', function() {
    it('should return a number or an array.', function() {
      expect(toString).to.be.a('number' || 'array');
    });
  }),



//toArray
   describe('The digitSet', function() {
    it('should return a number or an array.', function() {
      expect(toArray).to.be.a('number' || 'array');
    });
  }),



//contains ----- IS WORKING
   describe('The DigitSet should contain', function() {
    var dTester = new DigitSet();
    
    it('should contain', function() {
      expect(dTester.contains(2)).to.equal(true);
    });
  })


})

/*  DigitSet.prototype.contains = function(num){
    for (keys in this.possibilities){
      if (this.possibilities[keys] === num){
        return true;
      } else {
        return false;
      }
    }

  };

*/

//isUncertain
/*   describe('The digitSet', function() {
    it('should return a number or an array.', function() {
      expect(isUncertain).to.be.a('number' || 'array');
    /*});*/



/*
//isUncertain
   describe('The digitSet', function() {
    var dTester = new DigitSet();
    it('should return a number or an array.', function() {
      expect(isUncertain).to.be.a('number' || 'array');
    });
  }),

//size
   describe('The digitSet', function() {
    var dTester = new DigitSet();
    it('should return a number or an array.', function() {
      expect(size).to.be.a('number' || 'array');
    });
  }),

//set
   describe('The digitSet', function() {
    var dTester = new DigitSet();
    it('should return a number or an array.', function() {
      expect(set).to.be.a('number' || 'array');
    });
  }),



//contains
   describe('The digitSet', function() {
    var dTester = new DigitSet();
    it('should return a number or an array.', function() {
      expect(contains).to.be.a('number' || 'array');
    });
  }),

//eliminate
   describe('The digitSet', function() {
    var dTester = new DigitSet();
    it('should return a number or an array.', function() {
      expect(eliminate).to.be.a('number' || 'array');
    });
  }),

//eliminate()
   describe('The digitSet', function() {
    it('should return a number or an array.', function() {
      expect(eliminate()).to.be.a('number' || 'array');
    });
  }),






//contains
   describe('The digitSet', function() {
    it('should return a number or an array.', function() {
      expect(contains).to.be.a('number' || 'array');
    });
  });
});
*/