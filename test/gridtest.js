var Grid = require("../grid.js");
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

var gridTester = new Grid("............942.8.16.....29........89.6.....14..25......4.......2...8.9..5....7..");

describe('Grid constructor', function() {

	describe('cells()', function() {

		var gridTester = new Grid("............942.8.16.....29........89.6.....14..25......4.......2...8.9..5....7..");
		var cellArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];

	  	it('should return array of all cell tokens', function() {
	    	expect(gridTester.cells()).to.deep.equal(cellArray);
	    });
	  }),

	describe('cells(groupToken)', function() {

		var gridTester = new Grid("............942.8.16.....29........89.6.....14..25......4.......2...8.9..5....7..");
		var rowCells = [18, 19, 20, 21, 22, 23, 24, 25, 26];

	  	it('should return array of cell tokens associated with groupToken', function() {
				expect(gridTester.cells("R: 2")).to.deep.equal(rowCells);
	    });
	  }),

	describe('groups()', function() {
	  	it('should return an array of all group tokens (and contain this random row)', function() {
	    	expect(gridTester.groups()).to.contain("R: 5");
	    });
			it('should return an array of all group tokens (and contain this random col)', function() {
				expect(gridTester.groups()).to.contain("C: 0");
			});
			it('should return an array of all group tokens (and contain this random block)', function() {
				expect(gridTester.groups()).to.contain("B: 7");
			});
	  }),

	describe('groups(cellToken)', function() {

		var gridTester = new Grid("............942.8.16.....29........89.6.....14..25......4.......2...8.9..5....7..");

		  	it('should return group tokens for a specific cell token', function() {
		    	expect(gridTester.groups(0)).to.deep.equal(["R: 0", "C: 0", "B: 0"]);
		    });
		  }),

	describe('getRow()', function() {
	  	it('should return array of all row tokens', function() {
	    	expect(gridTester.getRow()).to.deep.equal(["R: 0", "R: 1", "R: 2", "R: 3", "R: 4", "R: 5", "R: 6", "R: 7", "R: 8"]);
	    });
	  }),

	describe('getRow(cellToken)', function() {
	  	it('should return the row token for square 28', function() {
	    	expect(gridTester.getRow(28)).to.equal("R: 3");
	    });
	  }),

	describe('getCol()', function() {
	  	it('should return an array of all column tokens', function() {
	    	expect(gridTester.getCol()).to.deep.equal(["C: 0", "C: 1", "C: 2", "C: 3", "C: 4", "C: 5", "C: 6", "C: 7", "C: 8"]);
	    });
	  }),

	describe('getCol(cellToken)', function() {
		it('should return the column token for square 8', function() {
			expect(gridTester.getCol(8)).to.equal("C: 8");
		});
	}),

	describe('getBlock()', function() {
		it('should return an array of all block tokens', function() {
			expect(gridTester.getBlock()).to.deep.equal(["B: 0", "B: 1", "B: 2", "B: 3", "B: 4", "B: 5", "B: 6", "B: 7", "B: 8"]);
		});
	}),

	describe('getBlock(cellToken)', function() {
		it('should return the block token for square 80', function() {
			expect(gridTester.getBlock(80)).to.equal("B: 8");
		});
	}),

	describe('getPossible(cellToken)', function() {
		it('should return an array of possibilities (1-9 default)', function() {
			expect(gridTester.getPossible(7)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});
	}),

	describe('setPossible(cellToken, digitSet)', function() {
		var gridTester = new Grid("............942.8.16.....29........89.6.....14..25......4.......2...8.9..5....7..");

		before(function() {
			gridTester.setPossible(36, [2, 5, 9]);
		});

		it('should ', function() {
			expect(gridTester.sBoard[36]).to.deep.equal([2, 5, 9]);
		});
	}),

	describe('neighborhood(cellToken)', function() {
		var gridTester = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");

		it('should return a digitSet of all known digits in digits in same row, col, or block (6 is in the column)', function() {
			expect(gridTester.neighborhood(41)).to.include(6);
		});

		it('should return a digitSet of all known digits in digits in same row, col, or block (3 is in the row)', function() {
			expect(gridTester.neighborhood(41)).to.include(3);
		});

		it('should return a digitSet of all known digits in digits in same row, col, or block (1 is in the block)', function() {
			expect(gridTester.neighborhood(41)).to.include(1);
		});

		it('should return a digitSet of all known digits in digits in same row, col, or block (2 is in the row AND block)', function() {
			expect(gridTester.neighborhood(41)).to.include(2);
		});
	}),

	describe('fromString(initString)', function() {
		it('should set up a grid with known digits', function() {
			expect(gridTester.fromString(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8")).to.be.a("function");
		});
	}),

	describe('groupHas()', function() {
		var gridTester = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");
		it('returns a new instance of DigitSet', function() {
			expect(gridTester.groupHas("R: 1")).to.be.an.instance.of(DigitSet);
		});
		it('... with values associated with a groupToken', function() {
			expect(gridTester.groupHas("R: 1").possibilities).to.include(9);
		});
	}),

	describe('groupNeeds()', function() {
		var gridTester = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");
		it('returns a new instance of DigitSet', function() {
			expect(gridTester.groupHas("R: 1")).to.be.an.instance.of(DigitSet);
		});
		it('... with values associated with a groupToken', function() {
			expect(gridTester.groupHas("R: 1").possibilities).to.include(1);
		});
	}),

	describe('toString()', function() {
		it('should return a string', function() {
			expect(gridTester.toString()).to.be.a('string');
		});
		it('... of 81 characters', function() {
			expect(gridTester.toString().length).to.equal('string');
		});
	}),

	describe('save()', function() {
		var gridTester = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");

		before(function() {
			saveTester = gridTester.save();
		});

		it('save the ds at a certain point', function() {
			expect(gridTester).to.deep.equal(saveTester);
		});


	}),

	describe('restore(savedState)', function() {
		var gridTester = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");

		before(function() {
			saveTester = gridTester.save();
			gridTester.sBoard[0] = [1];
			gridTester.restore(saveTester);
		});

		it('will restore the ds from point of error', function() {
			expect(gridTester.sBoard).to.deep.equal(saveTester.sBoard);
		});
	}),

	describe('isInvalid()', function() {
		var gridTester = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");
		it('return true if notices any problems, else false?', function() {
			expect(isInvalid).to.be.a('boolean');
		});
	}),

	describe('remaining()', function() {
		var gridTester = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");
		it('will return number (0-81) of uncertain cells', function() {
			expect(gridTester.remaining()).to.be.a('number');
		});
	})
});
