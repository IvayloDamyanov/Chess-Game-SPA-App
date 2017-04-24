class Board {
    constructor(){
        this.board = [[],[],[],[],[],[],[],[]];
    }

    get board(){
        return this._board;
    }

    set board(value){
        this._board = value;
    }

    initializeBoard(){
        let pieces = [
            new King("white", 1, 1),
            new King("black", 8, 1),
            new King("white", 3, 4)
        ]
        
        this.populateBoard(pieces);
    }



    populateBoard(pieces){
        pieces.forEach((piece) => this.board[piece.posX-1][piece.posY-1] = piece);
    }
}
