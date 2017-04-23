class Piece{
    constructor(color, type, posX, posY){
        this.color = color;
        this.type = type;
        this.posX = posX;
        this.posY = posY;
    }

    get color() {
        return this._color;
    }

    set color(value){
        if (!(value === "white" || value === "black")){
            throw Error("invalid color");
        }
        this._color = value;
    }

    get type() {
        return this._type;
    }

    set type(value){
        function checkType(value){
            let types = ["Pawn","Knight","Bishop","Rook","Queen","King"];
            for(let i = 0; i < types.length; i += 1){
                if(value === types[i]){
                    return true;
                }
            }
            return false;
        }
        if (!checkType(value)){
            throw new Error("Invalid piece type");
        }
        this._type = value;
    }

    get posX(){
        return this._posX;
    }

    set posX(value){
        if (typeof(value) != "number"){
            throw new Error("posX is not a number");
        }
        if ((value < 1 || 8 < value) || value%1 !== 0){
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
        if ((value < 1 || 8 < value) || value%1 !== 0){
            throw new Error("invalid posY value");
        }
        this._posY = value;
    }
}

//var p = new Piece("white", "King", 1, 1);

// class Pawn extends Piece(){
    
// }