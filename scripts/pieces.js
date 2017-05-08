class Piece{
    constructor(color, posX, posY){
        this.color = color;
        this.posX = posX;
        this.posY = posY;
    }

    get color() {
        return this._color;
    }

    set color(value){
        if (!(value == "white" || value == "black")){
            throw Error("invalid color");
        }
        this._color = value;
    }

    get posX(){
        return this._posX;
    }

    set posX(value){
        if (typeof(value) != "number"){
            throw new Error("posX is not a number");
        }
        if ((value < 0 || 7 < value) || value%1 !== 0){
            throw new Error("invalid posX value");
        }
        this._posX = value;
    }

    get posY(){
        return this._posY;
    }

    set posY(value){
        if (typeof(value) != "number"){
            throw new Error("posY is not a number");
        }
        if ((value < 0 || 7 < value) || value%1 !== 0){
            throw new Error("invalid posY value");
        }
        this._posY = value;
    }

    get moves(){
        return this._moves;
    }

    set moves(value){
        if (typeof(value) !== "object"){
            throw new Error("List of moves is not an object")
        }
        this._moves = value;
    }

    checkBounds(newX, newY){
        if(newX < 0 || 7 < newX || newY < 0 || 7 < newY){
            return false;
        }
        return true;
    }

    checkMove(newX, newY, moves){
        let xMove = newX - this.posX;
        let yMove = newY - this.posY;
        for(let i = 0; i < moves.length; i += 1){
            if(moves[i][0] == xMove && moves[i][1] == yMove){
                return true;
            }
        }
        return false;
    }
}

class Pawn extends Piece{
    constructor(color, posX, posY){
        super(color, posX, posY);
            this.moves = [];
            this.type = "Pawn";
            this.isMoved = false;
    }
    get moves(){
        return this._moves;
    }

    set moves(value){
        this._moves = value;
    }

    get type() {
        return this._type;
    }

    set type(value){
        if (value !== "Pawn"){
            throw new Error("Not a Pawn piece type");
        }
        this._type = value;
    }

    get isMoved(){
        return this._isMoved;
    }

    set isMoved(value){
        this._isMoved = value;
    }

    move(board, newX, newY){
        this.getMoves(board);
        if(this.checkMove(newX, newY, this.moves)){
            this.posX = newX;
            this.posY = newY;
            this.isMoved = true;
            return true;
        }
        return false;
    }

    getMoves(board){
        const boardSize = 7; // 8 fields from 0 to 7

        if (this.color == "white"){
            this.moves = [[]];
            if (!board[this.posX][this.posY-1]){
                this.moves = [[0, -1]];
                if(this.isMoved == false){
                    this.moves.push([0, -2]);
                }
            }                
            if (this.posX > 0 && board[this.posX-1][this.posY-1]){
                this.moves.push([-1, -1]);
            }
            if (this.posX < boardSize && board[this.posX+1][this.posY-1]){
                this.moves.push([1, -1]);
            }
        }

        if (this.color == "black"){
            this.moves = [[]];
            if (!board[this.posX][this.posY+1]){
                this.moves = [[0, 1]];
                if(this.isMoved == false){
                    this.moves.push([0, 2]);
                }
            }                
            if (this.posX > 0 && board[this.posX-1][this.posY+1]){
                this.moves.push([-1, 1]);
            }
            if (this.posX < boardSize && board[this.posX+1][this.posY+1]){
                this.moves.push([1, 1]);
            }
        }
    }
}

class King extends Piece{
    constructor(color, posX, posY){
        super(color, posX, posY);
            this.moves = [];
            this.standartMoves = [
                [1, -1],
                [1, 0],
                [1, 1],
                [0, 1],
                [-1, 1],
                [-1, 0],
                [-1, -1],
                [0, -1]
            ];
            this.type = "King";
            this.isMoved = false;
    }
    get moves(){
        return this._moves;
    }

    set moves(value){
        this._moves = value;
    }

    get type() {
        return this._type;
    }

    set type(value){
        if (value !== "King"){
            throw new Error("Not a King piece type");
        }
        this._type = value;
    }

    get isMoved(){
        return this._isMoved;
    }

    set isMoved(value){
        this._isMoved = value;
    }

    move(board, newX, newY){
        this.getMoves(board);
        if((typeof(board[newX][newY]) !== "undefined") && board[newX][newY].color == this.color){
            return false;
        }

        if(this.checkMove(newX, newY, this.moves)){
            if (this.posX - newX == 2){
                board[0][7].posX += 3;
            } //castling - is Rook moved (bg: rokada)

            if (this.posX - newX == -2){
                board[7][7].posX += -2;
            } //castling - is Rook moved (bg: rokada)

            this.posX = newX;
            this.posY = newY;
            this.isMoved = true;
            return true;
        }
        return false;
    }

    getMoves(board){
        this.moves = this.standartMoves;
        if (!this.isMoved){
            if (!board[this.posX+1][this.posY]
                && !board[this.posX+2][this.posY]
                && board[this.posX+3][this.posY].type == "Rook"
                && !board[this.posX+3][this.posY].isMoved) {
                    this.moves.push([2, 0]);
            }
            if (!board[this.posX-1][this.posY]
                && !board[this.posX-2][this.posY]
                && !board[this.posX-3][this.posY]
                && board[this.posX-4][this.posY].type == "Rook"
                && !board[this.posX-4][this.posY].isMoved) {
                    this.moves.push([-2, 0]);
            }
        }
    }
}

class Knight extends Piece{
    constructor(color, posX, posY){
        super(color, posX, posY);
        this.moves = [
            [-1, -2],
            [-2, -1],
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2]
        ];
        this.type = "Knight";
    }

    get moves(){
        return this._moves;
    }

    set moves(value){
        this._moves = value;
    }

    get type() {
        return this._type;
    }

    set type(value){
        if (value !== "Knight"){
            throw new Error("Not a Knight piece type");
        }
        this._type = value;
    }

     move(board, newX, newY){
        if((typeof(board[newX][newY]) !== "undefined") && board[newX][newY].color == this.color){
            return false;
        }

        if(this.checkMove(newX, newY, this.moves)){
            this.posX = newX;
            this.posY = newY;
        }
        
        return true;
    }
}

class Bishop extends Piece{
    constructor(color, posX, posY){
        super(color, posX, posY);
            this.moves = [];
            this.type = "Bishop";
    }

    get moves(){
        return this._moves;
    }

    set moves(value){
        this._moves = value;
    }

    get type() {
        return this._type;
    }

    set type(value){
        if (value !== "Bishop"){
            throw new Error("Not a Bishop piece type");
        }
        this._type = value;
    }

    move(board, newX, newY){
        this.getMoves(board);
        if(this.checkMove(newX, newY, this.moves)){
            this.posX = newX;
            this.posY = newY;
            return true;
        }
        return false;
    }

    getMoves(board){
        this.moves = [];
        for (let i = 1; i < 8; i += 1){
            if (!(this.posX + i > 7) && !(this.posY + i > 7)){
               if (!(board[this.posX+i][this.posY+i])){
                    this.moves.push([i, i]);
                } else if (board[this.posX+i][this.posY+i].color !== this.color){
                    this.moves.push([i, i]);
                    break;
                } else {
                    break;
                } 
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX - i < 0) && !(this.posY - i < 0)){
                if (!(board[this.posX-i][this.posY-i])){
                    this.moves.push([-i, -i]);
                } else if (board[this.posX-i][this.posY-i].color !== this.color){
                    this.moves.push([-i, -i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX + i > 7) && !(this.posY - i < 0)){
                if (!(board[this.posX+i][this.posY-i])){
                    this.moves.push([i, -i]);
                } else if (board[this.posX+i][this.posY-i].color !== this.color){
                    this.moves.push([i, -i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX - i < 0) && !(this.posY + i > 7)){
                if (!(board[this.posX-i][this.posY+i])){
                    this.moves.push([-i, i]);
                } else if (board[this.posX-i][this.posY+i].color !== this.color){
                    this.moves.push([-i, i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }
    }
}

class Rook extends Piece{
    constructor(color, posX, posY){
        super(color, posX, posY);
            this.moves = [];
            this.type = "Rook";
            this.isMoved = false;
    }

    get moves(){
        return this._moves;
    }

    set moves(value){
        this._moves = value;
    }

    get type() {
        return this._type;
    }

    set type(value){
        if (value !== "Rook"){
            throw new Error("Not a Rook piece type");
        }
        this._type = value;
    }

    move(board, newX, newY){
        this.getMoves(board);
        if(this.checkMove(newX, newY, this.moves)){
            this.posX = newX;
            this.posY = newY;
            return true;
        }
        return false;
    }

    getMoves(board){
        this.moves = [];
        for (let i = 1; i < 8; i += 1){
            if (!(this.posX + i > 7)){
               if (!(board[this.posX+i][this.posY])){
                    this.moves.push([i, 0]);
                } else if (board[this.posX+i][this.posY].color !== this.color){
                    this.moves.push([i, 0]);
                    break;
                } else {
                    break;
                } 
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX - i < 0)){
                if (!(board[this.posX-i][this.posY])){
                    this.moves.push([-i, 0]);
                } else if (board[this.posX-i][this.posY].color !== this.color){
                    this.moves.push([-i, 0]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posY - i < 0)){
                if (!(board[this.posX][this.posY-i])){
                    this.moves.push([0, -i]);
                } else if (board[this.posX][this.posY-i].color !== this.color){
                    this.moves.push([0, -i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posY + i > 7)){
                if (!(board[this.posX][this.posY+i])){
                    this.moves.push([0, i]);
                } else if (board[this.posX][this.posY+i].color !== this.color){
                    this.moves.push([0, i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }
    }
}

class Queen extends Piece{
    constructor(color, posX, posY){
        super(color, posX, posY);
            this.moves = [];
            this.type = "Queen";
    }
    get moves(){
        return this._moves;
    }

    set moves(value){
        this._moves = value;
    }

    get type() {
        return this._type;
    }

    set type(value){
        if (value !== "Queen"){
            throw new Error("Not a Queen piece type");
        }
        this._type = value;
    }

    move(board, newX, newY){
        this.getMoves(board);
        if(this.checkMove(newX, newY, this.moves)){
            this.posX = newX;
            this.posY = newY;
            return true;
        }
        return false;
    }

    getMoves(board){
        this.moves = [];
        for (let i = 1; i < 8; i += 1){
            if (!(this.posX + i > 7) && !(this.posY + i > 7)){
               if (!(board[this.posX+i][this.posY+i])){
                    this.moves.push([i, i]);
                } else if (board[this.posX+i][this.posY+i].color !== this.color){
                    this.moves.push([i, i]);
                    break;
                } else {
                    break;
                } 
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX - i < 0) && !(this.posY - i < 0)){
                if (!(board[this.posX-i][this.posY-i])){
                    this.moves.push([-i, -i]);
                } else if (board[this.posX-i][this.posY-i].color !== this.color){
                    this.moves.push([-i, -i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX + i > 7) && !(this.posY - i < 0)){
                if (!(board[this.posX+i][this.posY-i])){
                    this.moves.push([i, -i]);
                } else if (board[this.posX+i][this.posY-i].color !== this.color){
                    this.moves.push([i, -i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX - i < 0) && !(this.posY + i > 7)){
                if (!(board[this.posX-i][this.posY+i])){
                    this.moves.push([-i, i]);
                } else if (board[this.posX-i][this.posY+i].color !== this.color){
                    this.moves.push([-i, i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX + i > 7)){
               if (!(board[this.posX+i][this.posY])){
                    this.moves.push([i, 0]);
                } else if (board[this.posX+i][this.posY].color !== this.color){
                    this.moves.push([i, 0]);
                    break;
                } else {
                    break;
                } 
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posX - i < 0)){
                if (!(board[this.posX-i][this.posY])){
                    this.moves.push([-i, 0]);
                } else if (board[this.posX-i][this.posY].color !== this.color){
                    this.moves.push([-i, 0]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posY - i < 0)){
                if (!(board[this.posX][this.posY-i])){
                    this.moves.push([0, -i]);
                } else if (board[this.posX][this.posY-i].color !== this.color){
                    this.moves.push([0, -i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }

        for (let i = 1; i < 8; i += 1){
            if (!(this.posY + i > 7)){
                if (!(board[this.posX][this.posY+i])){
                    this.moves.push([0, i]);
                } else if (board[this.posX][this.posY+i].color !== this.color){
                    this.moves.push([0, i]);
                    break;
                } else {
                    break;
                }
            } else { break; }
        }
    }
}