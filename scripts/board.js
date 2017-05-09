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

    clearField(board, xCoord, yCoord) {
        board[xCoord][yCoord] = false;
    }

    movePiece(board, piece) {
        board[piece.posX][piece.posY] = piece;
        this.checkUpgrade(board, piece);
    }

    checkUpgrade(board, piece) {
        if (piece.type == "Pawn") {
            if (piece.color == "white" && piece.posY == 0) {
                this.pieceUpgrade(board, piece);
            }
            if (piece.color == "black" && piece.posY == 7) {
                this.pieceUpgrade(board, piece);
            }
        }
    }

    pieceUpgrade(board, piece) {
        let queen = new Queen(piece.color, piece.posX, piece.posY);
        board[queen.posX][queen.posY] = queen;
    }

    checkGameOver(board, player1, player2) {
        const boardSize = 7;
        let hasWhiteKing = false;
        let hasBlackKing = false;
        for (let row = 0; row <= boardSize; row += 1) {
            for (let col = 0; col <= boardSize; col += 1) {
                if (board[row][col] && board[row][col].type == "King") {
                    if (board[row][col].color == "white") {
                        hasWhiteKing = true;
                    }

                    if (board[row][col].color == "black") {
                        hasBlackKing = true;
                    }
                }

                if (hasWhiteKing && hasBlackKing) {
                    return false;
                }
            }
        }

        if (!hasBlackKing && !hasWhiteKing) {
            return false;
        }

        if (!hasBlackKing) {
            return player1;
        }

        if (!hasWhiteKing) {
            return player2;
        }
    }
}