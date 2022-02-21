class board {
    constructor(board=[0,0,0,0,0,0,0,0,0]) {
        this.board = board;
        this.noughtWinConditions = []
        this.crossWinConditions = []
    }

    getPosSafe(position) {
        if (!(position < 0 || position > 9)) {
            return this.board[position];
        }
        return "+";
    }

    makeMove(position,player) {
        if (this.board[position] != "") return false;
        if (player == 1) {
            if (position in this.crossWinConditions) return true;
            this.board[position] = player;
            if (this.getPosSafe(position-4) == 1 && this.getPosSafe(position+4) == 0) { this.crossWinConditions.push(position+4); }
            if (this.getPosSafe(position-3) == 1 && this.getPosSafe(position+3) == 0) { this.crossWinConditions.push(position+3); }
            if (this.getPosSafe(position-2) == 1 && this.getPosSafe(position+2) == 0) { this.crossWinConditions.push(position+2); }
            if (this.getPosSafe(position-1) == 1 && this.getPosSafe(position+1) == 0) { this.crossWinConditions.push(position+1); }
            if (this.getPosSafe(position+1) == 1 && this.getPosSafe(position-1) == 0) { this.crossWinConditions.push(position-1); }
            if (this.getPosSafe(position+2) == 1 && this.getPosSafe(position-2) == 0) { this.crossWinConditions.push(position-2); }
            if (this.getPosSafe(position+3) == 1 && this.getPosSafe(position-3) == 0) { this.crossWinConditions.push(position-3); }
            if (this.getPosSafe(position+4) == 1 && this.getPosSafe(position-4) == 0) { this.crossWinConditions.push(position-4); }
        } else if (player == -1) {
            if (position in this.noughtWinConditions) return true;
            this.board[position] = player;
            if (this.getPosSafe(position-4) == -1 && this.getPosSafe(position+4) == 0) { this.noughtWinConditions.push(position+4); }
            if (this.getPosSafe(position-3) == -1 && this.getPosSafe(position+3) == 0) { this.noughtWinConditions.push(position+3); }
            if (this.getPosSafe(position-2) == -1 && this.getPosSafe(position+2) == 0) { this.noughtWinConditions.push(position+2); }
            if (this.getPosSafe(position-1) == -1 && this.getPosSafe(position+1) == 0) { this.noughtWinConditions.push(position+1); }
            if (this.getPosSafe(position+1) == -1 && this.getPosSafe(position-1) == 0) { this.noughtWinConditions.push(position-1); }
            if (this.getPosSafe(position+2) == -1 && this.getPosSafe(position-2) == 0) { this.noughtWinConditions.push(position-2); }
            if (this.getPosSafe(position+3) == -1 && this.getPosSafe(position-3) == 0) { this.noughtWinConditions.push(position-3); }
            if (this.getPosSafe(position+4) == -1 && this.getPosSafe(position-4) == 0) { this.noughtWinConditions.push(position-4); }
        }
        return undefined;
    }
    debug() {
        console.log(this.board)
        console.log("NoughtWinConditions: " + this.noughtWinConditions)
        console.log("CrossWinConditions: " + this.crossWinConditions)
    }
} 

module.exports = board