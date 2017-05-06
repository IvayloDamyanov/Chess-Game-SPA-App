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

class King extends Piece{
    constructor(color, posX, posY){
        super(color, posX, posY);
            this.moves = [
                [0, -1],
                [1, -1],
                [1, 0],
                [1, 1],
                [0, 1],
                [-1, 1],
                [-1, 0],
                [-1, -1]
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
        if((typeof(board[newX, newY]) !== "undefined") && board[newX, newY].color === this.color){
            return false;
        }

        if(this.checkBounds(newX, newY) && this.checkMove(newX, newY, this.moves)){
            this.posX = newX;
            this.posY = newY;
            console.log("moved to " + this.posX + ", " + this.posY)
        }
        
        return true;
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
        if((typeof(board[newX, newY]) !== "undefined") && board[newX, newY].color === this.color){
            return false;
        }

        if(!(super.checkBounds(newX, newY))){
            return false;
        }

        if(!(super.checkMove(newX, newY, this.moves))){
            return false;
        }

        return true;
    }
}
