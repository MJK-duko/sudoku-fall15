// no need for grid module

function SudokuViewer(grid) {
	// string depicting 9x9 grid of digits known with certainty use own game with game.toString(), then squarify that string
	showCertain: function() {

	},
	// decorate finished group
	updateView: function() {

	},
	// richer display including partial info
	showPossible: function() {

	},
	// unknown functionality...
	showDebug: function() {

	},
	// show number of possibilities at some cell
	showHint: function(cellToken) {

	},
	// store snapshot /* call grid.toString(), store that */
	snapshot: function() {

	},
	// replay all shapshots /* call series of viewer.showCertain() for each stored snapshot? */
	playback: function() {

	},
	// timer for how long the puzzle takes to solve
	startTimer: function() {

	}
}
SudokuViewer.prototype.show = function() {
	console.log('Sudoku appears here!');
}

console.log(SudokuViewer);// for testing only

module.exports = SudokuViewer;
