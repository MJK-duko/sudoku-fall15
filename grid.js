



var DigitSet = require('./digitset');
var string = ".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8"

function Grid(initstr) {
	var sBoard = initstr.split('\n')[0].split('');
	for (var id = 0; id < sBoard.length; id++) {
		console.log(DigitSet[id]);
	};
};

console.log(Grid(string));// for testing only

module.exports = Grid;



/*	var 
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
})();*/
