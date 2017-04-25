class Board {
    constructor(){
        this.board = [[],[],[],[],[],[],[],[]];
        this.pieces;
    }

    get board(){
        return this._board;
    }

    set board(value){
        this._board = value;
    }

    initializeBoard(){
        this.pieces = [
            new King("white", 0, 0),
            new King("white", 1, 1),
            new King("black", 6, 6),
            new King("black", 7, 7)
        ]
        
        // uncomment the following starting positions when game is ready
        // pieces = [
        //     new Pawn("white", 1, 7),
        //     new Pawn("white", 2, 7),
        //     new Pawn("white", 3, 7),
        //     new Pawn("white", 4, 7),
        //     new Pawn("white", 5, 7),
        //     new Pawn("white", 6, 7),
        //     new Pawn("white", 7, 7),
        //     new Pawn("white", 8, 7),
        //     new Rook("white", 1, 8),
        //     new Rook("white", 8, 8),
        //     new Knight("white", 2, 8),
        //     new Knight("white", 7, 8),
        //     new Bishop("white", 3, 8),
        //     new Bishop("white", 6, 8),
        //     new Queen("white", 4, 8),
        //     new King("white", 5, 8),
        //     new Pawn("black", 1, 2),
        //     new Pawn("black", 2, 2),
        //     new Pawn("black", 3, 2),
        //     new Pawn("black", 4, 2),
        //     new Pawn("black", 5, 2),
        //     new Pawn("black", 6, 2),
        //     new Pawn("black", 7, 2),
        //     new Pawn("black", 8, 2),
        //     new Rook("black", 1, 1),
        //     new Rook("black", 8, 1),
        //     new Knight("black", 2, 1),
        //     new Knight("black", 7, 1),
        //     new Bishop("black", 3, 1),
        //     new Bishop("black", 6, 1),
        //     new Queen("black", 4, 1),
        //     new King("black", 5, 1)
        // ]
        
        this.pieces.forEach((piece) => this.board[piece.posX][piece.posY] = piece);
    }

    checkField(xCoord, yCoord){
        if (this.board[xCoord][yCoord]){
            return true;
        } else {
            return false;
        }
    }

    selectPiece(xCoord, yCoord){
        return this.board[xCoord][yCoord];
    }

    clearField(xCoord, yCoord){
        this.board[xCoord][yCoord] = false;
    }

    movePiece(piece){
        this.board[piece.posX][piece.posY] = piece;
    }
}


