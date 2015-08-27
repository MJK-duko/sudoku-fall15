var viewer = require("../viewer.js");
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('Viewer testing', function() {

    // before(function() {
    //   fakeArray[0] = 1;
    //   fakeArray[1] = 2;
    //   fakeArray[2] = 3;
    //   fakeArray.length = 3;
    // });

// expect(fakeArray.pop()).to.equal(3);

    it('should return a 9x9 grid of digits known with certainty', function() {
      expect(showCertain()).to.be.a("string");
    });

    it('should return a decorated version of the 9x9 grid', function() {
      expect(updateView()).to.be.a("string");
    });

    it('should return the board with possible numbers', function() {
      expect(showPossible()).to.be.a("string");
    });

    it('should return the possibilities at some specific cell', function() {
      expect(showHint(cellToken)).to.be.an("array");
    });

    it('should return a snapshot of the board as a string', function() {
      expect(snapshot()).to.be.a("string");
    });

    it('should replay all the snapshots of a particular board', function() {
      expect(replay()).to.be.a("string");
    });

    it('should be ', function() {
      expect(replay()).to.be.a("string");
    });
  });

  // // timer for how long the puzzle takes to solve
  // startTimer: function() {


  describe('The push method', function() {

    before(function() {
      fakeArray[0] = 1;
      fakeArray[1] = 2;
      fakeArray[2] = 3;
      fakeArray.length = 3;
    });

    it('should return the new length', function(){
      assert.equal(fakeArray.push(7), 4);
    });
  });
});
