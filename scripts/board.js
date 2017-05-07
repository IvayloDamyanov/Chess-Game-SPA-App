class Board {
    constructor() {
        this.board = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        this.pieces;
    }

    get board() {
        return this._board;
    }

    set board(value) {
        this._board = value;
    }

    initializeBoard() {
        this.pieces = [
            new Pawn("white", 0, 6),
            new Pawn("white", 1, 6),
            new Pawn("white", 2, 6),
            new Pawn("white", 3, 6),
            new Pawn("white", 4, 6),
            new Pawn("white", 5, 6),
            new Pawn("white", 6, 6),
            new Pawn("white", 7, 6),
            new Rook("white", 0, 7),
            new Rook("white", 7, 7),
            new Knight("white", 1, 7),
            new Knight("white", 6, 7),
            new Bishop("white", 2, 7),
            new Bishop("white", 5, 7),
            new Queen("white", 3, 7),
            new King("white", 4, 7),
            new Pawn("black", 0, 1),
            new Pawn("black", 1, 1),
            new Pawn("black", 2, 1),
            new Pawn("black", 3, 1),
            new Pawn("black", 4, 1),
            new Pawn("black", 5, 1),
            new Pawn("black", 6, 1),
            new Pawn("black", 7, 1),
            new Rook("black", 0, 0),
            new Rook("black", 7, 0),
            new Knight("black", 1, 0),
            new Knight("black", 6, 0),
            new Bishop("black", 2, 0),
            new Bishop("black", 5, 0),
            new Queen("black", 3, 0),
            new King("black", 4, 0)
        ]
        
        this.pieces.forEach((piece) => this.board[piece.posX][piece.posY] = piece);
    }

    checkField(xCoord, yCoord) {
        if (this.board[xCoord][yCoord]) {
            return true;
        } else {
            return false;
        }
    }

    selectPiece(xCoord, yCoord) {
        return this.board[xCoord][yCoord];
    }

    clearField(xCoord, yCoord) {
        this.board[xCoord][yCoord] = false;
    }

    movePiece(piece) {
        this.board[piece.posX][piece.posY] = piece;
    }
}


