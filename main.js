var Grid = require('./grid.js');
var Viewer = require('./viewer.js');

var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
// consider loading strings from file instead...

var game = new Grid(testStr);

var viewer = new Viewer(game);
viewer.show();


// starting template for sudoku solver
// IIFE's?

//DigitSet constructor
var DigitSet = (function() {

	var idDigitSet = [1,2,3,4,5,6,7,8,9];
	
})();


// var ___ = require('lodash')
// module.exports('DigitSet')

// Grid constructor
var Grid = (function() {
	var 
	var sBoard = initString.split('\n')[0].split('');
	
	for 

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
})();


//Viewer constructor
//See sudoku_viewer.js for completed grid
var Viewer = (function(/*parameter?*/) {
	var rowCounter = [0,1,2,3,4,5,6,7,8,9];
	if(rowCount % 3 == 0) {
		console.log("+-----------+-----------+-----------+");
	} else {
		// if row[i] === undefined console.log(" " not undefined);
		console.log('|' + row[0] + '|' + row[1] + '|' + row[2] + '|' +
			row[3] + '|' + row[4] + '|' + row[5] + '|' + row[6] + '|' +
		    row[7] + '|' + row[8] + '|');
	}
})();