var DigitSet = require('./digitset');

new Grid(initString) // grid instance
new Grid() // grid instance

function Grid() {
	cells: function() {
		// array of all cell tokens
	},
	cells: function(groupToken) {
		// array of cell tokens associated with groupToken
	},
	groups: function() {
		//array of all group tokens
	}, 
	groups: function(cellToken) {
		// array of all group tokens associated with cellToken
	},
	getRow: function() {
		// array of grouTokens (all rows)
	},
	getRow: function(cellToken) {
		// groupToken (row)
	},
	getCol: function() {
		// array of groupTokens (all cols)
	},
	getCol: function(cellToken) {
		// groupToken (col)
	}
	getBlock: function() {
		// array of groupTokens (all blocks)
	},
	getPossible: function(cellToken) {
		// digitSet
	},
	setPossible: function(cellToken, digitSet) {
		// ?
	},
	neighborhood: function(cellToken) {
		// digitSet of all known digits in digits in same row, 
		// col, or block OR
		// array of digitSets of all neighbors
	},
	fromString: function(initString) {
		// set up grid with known digits
	},
	toString: function() {
		// initString
	},
	save: function() {
		//savedState
	},
	restore: function(savedState) {
		//
	},
	isInvalid: function() {
		//return true if notices any problems, else false?
	},
	remaining: function() {
		// number (0-81) of uncertain cells
	};



	row: function() {
		return Math.floor(id % 9);
	},
	column: function() {
		return (id % 9);
	},
	block: function(row, column) {
		return (Math.floor(row/3) * 3) + (Math.floor(column/3));
	},
	group: function() {
		//return row, column, block per id
	},
	neighborhood: function(group) {
		// return all values in row
		// all values in column
		// all values in block
	};

return Grid;
};

module.exports = Grid;