// no need for grid module

function SudokuViewer(grid) {
	// string depicting 9x9 grid of digits known with certainty use own game with game.toString(), then squarify that string
	this.showCertain = function() {
		var viewer = "";

		for (var squares in grid) {
				if (squares % 27 === 0) {
				 viewer += "|\n|----------+----------+----------";
				}
				if (squares % 9 === 0) {
				viewer += "|\n";
			}
				if (squares % 3 === 0) {
				viewer += "| ";
			}
			viewer += (grid[squares] + "  ");
		}
		viewer += "|\n|----------+----------+----------|";

		return viewer;

	};
	this.showPossible = function() {
		return "Coming soon!";
	};
	// richer display including partial info

}

SudokuViewer.prototype.show = function() {
	console.log('Sudoku appears here!');
};

// console.log(SudokuViewer);// for testing only

module.exports = SudokuViewer;
