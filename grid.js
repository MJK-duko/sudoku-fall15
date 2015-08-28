var DigitSet = require('./digitset');

// new Grid(initString) // grid instance
// new Grid() // grid instance


function Grid(initString){
	var sBoard = [];
	gridArray = initString.split("");
		for(var i=0;i<gridArray.length; i++){

		 if(gridArray[i] === "."){
		 	 sBoard[i] =  new DigitSet();
		 	} else {
		 		sBoard[i] = new DigitSet();
		 		sBoard[i].set(gridArray[i]);

		 	}
	}
}


	Grid.prototype.cells =  function(groupToken){
		// if parameter is provided, return array of cell tokens associated with groupToken
		if (groupToken) {
			var elmo = [];
			for (var i=0; i < 81; i++ ){
			if (groupToken === this.groups(i)[0] || groupToken === this.groups(i)[1] || groupToken === this.groups(i)[2]) {
				elmo.push(i);
		}
	}
	return elmo;
	} else {
		// otherwise, just return an array of all the cell tokens
		return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
	}
	};

	Grid.prototype.groups = function() {
		//array of all group tokens

	};

	Grid.prototype.groups = function(cellToken) {
		var row = ("R: " + (Math.floor(cellToken/9)));
		var col = ("C: " + (cellToken % 9));
		var block = ("B: " + ((Math.floor((Math.floor(cellToken/9))/3) * 3) + Math.floor((cellToken % 9)/3)));
		var groupToken =  [row, col, block];
		return groupToken;

	};
	Grid.prototype.getRow = function() {
		return ["R: 0", "R: 1", "R: 2", "R: 3", "R: 4", "R: 4", "R: 5", "R: 6", "R: 7", "R: 8"];
		// array of groupTokens (all rows)
	};
	Grid.prototype.getRow =  function(cellToken) {
		return this.groups(cellToken)[0];
	};
	Grid.prototype.getCol = function() {
		return ["C: 0", "C: 1", "C: 2", "C: 3", "C: 4", "C: 4", "C: 5", "C: 6", "C: 7", "C: 8"];
		// array of groupTokens (all rows)
	};
	Grid.prototype.getCol = function(cellToken) {
		return this.groups(cellToken)[1];
	};
	Grid.prototype.getBlock = function() {
		return ["B: 0", "B: 1", "B: 2", "B: 3", "B: 4", "B: 4", "B: 5", "B: 6", "B: 7", "B: 8"];
		// array of groupTokens (all blocks)
	};
	Grid.prototype.getBlock = function(cellToken) {
		return this.groups(cellToken)[2];
	};
	Grid.prototype.getPossible = function(cellToken) {
		return this.sBoard[cellToken].possibilities;// digitSet
	};
	Grid.prototype.setPossible = function(cellToken, digitSet) {
		this.sBoard[cellToken].possibilities = digitSet;
		// ?
	};
	Grid.prototype.neighborhood = function(cellToken) {

		var sesame = this.groups(cellToken);
		var trashCan = [];
		var vals = (this.cells(sesame[0])).concat(this.cells(sesame[1])).concat(this.cells(sesame[2]));
		for (i=0;i<81;i++){
			if (sBoard[vals[i]] !== "."){
			trashCan.push(sBoard[vals[i]]);
		}
	}
	    // digitSet of all known digits in digits in same row,
		// col, or block OR
		// array of digitSets of all neighbors
	};

	Grid.prototype.fromString =  function(initString) {
		var gridArray = initString.split("");
		for(i=0;i<gridArray.length; i++){
		 sBoard[i] = DigitSet();// set up grid with known digits
		}
	};
	Grid.prototype.toString = function() {
		// initString
	};
	Grid.prototype.save = function() {
		//savedState
	};
	Grid.prototype.restore = function(savedState) {
		//
	};
	Grid.prototype.isInvalid = function() {
		//return true if notices any problems, else false?
	};
	Grid.prototype.remaining = function() {
		if (cellToken[id].length > 1){
			return id;
		}
	}










var game1 = new Grid('.94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8');






// function Grid(initstr) {
// 	var sBoard = initstr.split('\n')[0].split('');
// 	for (var id = 0; id < sBoard.length; id++) {
// 		console.log(DigitSet[id]);

	// };

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
<<<<<<< HEAD
};
=======
})();*/

module.exports = Grid;
