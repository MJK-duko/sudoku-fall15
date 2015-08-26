var grid = require("../grid.js");
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;


describe('Grid constructor', function() {

	describe('cells()', function() {
	  	it('should return array of all cell tokens', function() {
	    	expect(cells).to.be.a('array');
	    })
	  }),

	describe('cells(groupToken)', function() {
	  	it('should return array of cell tokens associated with groupToken', function() {
	    	expect(cells(groupToken)).to.be.a('array');
	    })
	  }),

	describe('groups()', function() {
	  	it('array of all group tokens', function() {
	    	expect(groups).to.be.a('array');
	    })
	  }),

	describe('groups(cellToken)', function() {
	  	it('array of all group tokens associated with cellToken', function() {
	    	expect(groups(cellToken)).to.be.a('array');
	    })
	  }),
	
	describe('getRow()', function() {
	  	it('array of groupTokens (all rows)', function() {
	    	expect(getRow).to.be.a('array');
	    })
	  }),

	describe('getRow(cellToken)', function() {
	  	it('groupToken (row)', function() {
	    	expect(getRow(cellToken)).to.be.a('array');
	    })
	  }),

	describe('getCol()', function() {
	  	it('array of groupTokens (all cols)', function() {
	    	expect(getCol).to.be.a('array');
	    })
	  }),

	describe('getCol(cellToken)', function() {
		it('groupToken (col)'), function() {
			expect(getCol(cellToken).to.be.a('array');
		})
	}),

	describe('getBlock()', function() {
		it('array of groupTokens (all blocks)'), function() {
			expect(getBlock).to.be.a('array');
		})
	}),

	describe('getPossible(cellToken)', function() {
		it('digitSet'), function() {
			expect(getPossible).to.be.a('array');
		})
	}),
	
	describe('setPossible(cellToken, digitSet)', function() {
		it('?'), function() {
			expect(setPossible).to.not.be.ok;
		})
	}),

	describe('neighborhood(cellToken)', function() {
		it('digitSet of all known digits in digits in same row, col, or block 
			OR array of digitSets of all neighbors'), function() {
			expect(neighborhood(cellToken)).to.be.a('array'));
		})
	}),

	describe('fromString(initString)', function() {
		it('set up grid with known digits'), function() {
			expect(fromString).to.be.a('number' || 'send info to viewer');
		})
	}),

	describe('toString()', function() {
		it('initString'), function() {
			expect(getPossible).to.be.a('string');
		})
	}),

	describe('save()', function() {
		it('save the ds at a certain point'), function() {
			expect(save).to.be.a('saved array');
		})
	}),

	describe('restore(savedState)', function() {
		it('will restore the ds from point of error'), function() {
			expect(restore).to.be.a('array');
		})
	}),

	describe('isInvalid()', function() {
		it('return true if notices any problems, else false?'), function() {
			expect(isInvalid).to.be.a('boolean');
		})
	}),

	describe('remaining()', function() {
		it('will return number (0-81) of uncertain cells'), function() {
			expect(getPossible).to.be.a('number');
		})
	})
});