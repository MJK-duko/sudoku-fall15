var SudokuViewer = require("../viewer.js");
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('Viewer testing', function() {

var sudokuTester = new SudokuViewer(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");

    it('should return a 9x9 grid of digits known with certainty', function() {
      expect(sudokuTester.showCertain()).to.equal(
        "|\n|----------+----------+----------|\n| .  9  4  | .  .  .  | 1  3  .  |\n| .  .  .  | .  .  .  | .  .  .  |\n| .  .  .  | .  7  6  | .  .  2  |\n|----------+----------+----------|\n| .  8  .  | .  1  .  | .  .  .  |\n| .  3  2  | .  .  .  | .  .  .  |\n| .  .  .  | 2  .  .  | .  6  .  |\n|----------+----------+----------|\n| .  .  .  | .  5  .  | 4  .  .  |\n| .  .  .  | .  .  8  | .  .  7  |\n| .  .  6  | 3  .  4  | .  .  8  |\n|----------+----------+----------|"
      );
    });

    it('should return the board with possible numbers', function() {
      expect(sudokuTester.showPossible()).to.be.a("string");
    });
  });
