var Grid = require("../grid.js");
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

var gridTester = new Grid("............942.8.16.....29........89.6.....14..25......4.......2...8.9..5....7..");

describe('Grid constructor', function() {

	describe('cells()', function() {
	  	it('should return array of all cell tokens', function() {
	    	expect(Grid.cells).to.be([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
	    });
	  }),

	describe('cells(groupToken)', function() {
	  	it('should return array of cell tokens associated with groupToken', function() {
	    	expect(cells(groupToken)).to.be.a('array');
	    });
	  }),

	describe('groups()', function() {
	  	it('array of all group tokens', function() {
	    	expect(groups).to.be.a('array');
	    });
	  }),

	describe('groups(cellToken)', function() {
	  	it('array of all group tokens associated with cellToken', function() {
	    	expect(groups(cellToken)).to.be.a('array');
	    });
	  }),

	describe('getRow()', function() {
	  	it('array of groupTokens (all rows)', function() {
	    	expect(getRow).to.be.a('array');
	    });
	  }),

	describe('getRow(cellToken)', function() {
	  	it('groupToken (row)', function() {
	    	expect(getRow(cellToken)).to.be.a('array');
	    });
	  }),

	describe('getCol()', function() {
	  	it('array of groupTokens (all cols)', function() {
	    	expect(getCol).to.be.a('array');
	    });
	  }),

	describe('getCol(cellToken)', function() {
		it('groupToken (col)', function() {
			expect(getCol(cellToken)).to.be.a('array');
		});
	}),

	describe('getBlock()', function() {
		it('array of groupTokens (all blocks)', function() {
			expect(getBlock).to.be.a('array');
		});
	}),

	describe('getPossible(cellToken)', function() {
		it('digitSet', function() {
			expect(getPossible).to.be.a('array');
		});
	}),

	describe('setPossible(cellToken, digitSet)', function() {
		it('?', function() {
			expect(setPossible).to.not.be.ok;
		});
	}),

	describe('neighborhood(cellToken)', function() {
		it('digitSet of all known digits in digits in same row, col, or block OR array of digitSets of all neighbors', function() {
			expect(neighborhood(cellToken)).to.be.a('array');
		});
	}),

	describe('fromString(initString)', function() {
		it('set up grid with known digits', function() {
			expect(fromString).to.be.a('number' || 'send info to viewer');
		});
	}),

	describe('toString()', function() {
		it('initString', function() {
			expect(getPossible).to.be.a('string');
		});
	}),

	describe('save()', function() {
		it('save the ds at a certain point', function() {
			expect(save).to.be.a('saved array');
		});
	}),

	describe('restore(savedState)', function() {
		it('will restore the ds from point of error', function() {
			expect(restore).to.be.a('array');
		});
	}),

	describe('isInvalid()', function() {
		it('return true if notices any problems, else false?', function() {
			expect(isInvalid).to.be.a('boolean');
		});
	}),

	describe('remaining()', function() {
		it('will return number (0-81) of uncertain cells', function() {
			expect(getPossible).to.be.a('number');
		});
	})
});
