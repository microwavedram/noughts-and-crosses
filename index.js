const board = require('./board.js');

const Board = new board()
Board.makeMove(2,1)
Board.makeMove(1,1)
Board.debug()