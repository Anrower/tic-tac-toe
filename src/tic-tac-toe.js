class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x',
            this.marksStorage = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
    };

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) === null) {
            this.marksStorage[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol === 'x') {
                this.currentPlayerSymbol = 'o'
            } else {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        switch (true) {
            case ((this.marksStorage[0][0] === this.marksStorage[0][1]) &&
                (this.marksStorage[0][1] === this.marksStorage[0][2]) &&
                (this.marksStorage[0][2] !== null)):
                return this.marksStorage[0][0];

            case ((this.marksStorage[0][0] === this.marksStorage[1][1]) &&
                (this.marksStorage[1][1] === this.marksStorage[2][2]) &&
                (this.marksStorage[2][2] !== null)):
                return this.marksStorage[0][0];

            case ((this.marksStorage[0][0] === this.marksStorage[1][0]) &&
                (this.marksStorage[1][0] === this.marksStorage[2][0]) &&
                (this.marksStorage[2][0] !== null)):
                return this.marksStorage[0][0];

            case ((this.marksStorage[0][1] === this.marksStorage[1][1]) &&
                (this.marksStorage[1][1] === this.marksStorage[2][1]) &&
                (this.marksStorage[2][1] !== null)):
                return this.marksStorage[0][1];

            case ((this.marksStorage[0][2] === this.marksStorage[1][2]) &&
                (this.marksStorage[1][2] === this.marksStorage[2][2]) &&
                (this.marksStorage[2][2] !== null)):
                return this.marksStorage[0][2];

            case ((this.marksStorage[0][2] === this.marksStorage[1][1]) &&
                (this.marksStorage[1][1] === this.marksStorage[2][0]) &&
                (this.marksStorage[2][0] !== null)):
                return this.marksStorage[0][2];

            case ((this.marksStorage[1][0] === this.marksStorage[1][1]) &&
                (this.marksStorage[1][1] === this.marksStorage[1][2]) &&
                (this.marksStorage[1][2] !== null)):
                return this.marksStorage[1][0];

            case ((this.marksStorage[2][0] === this.marksStorage[2][1]) &&
                (this.marksStorage[2][1] === this.marksStorage[2][2]) &&
                (this.marksStorage[2][2] !== null)):
                return this.marksStorage[2][0];

            default:
                return null;
        }
    }

    noMoreTurns() {
        for (let i = 0; i < this.marksStorage.length; i++) {
            for (let j = 0; j < this.marksStorage.length; j++) {
                if (this.marksStorage[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.marksStorage[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
