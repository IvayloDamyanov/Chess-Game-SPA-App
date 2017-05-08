export class Player {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        if (!(value == "white" || value == "black")) {
            throw Error("invalid color");
        }
        this._color = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        let playerNameRegex = /^[a-zA-Z0-9]+$/;
        if (!value.match(playerNameRegex)) {
            throw new Error("Player name contains invalid symbols");
        }
        this._name = value;
    }
}

export function swapPlayer(playerOnMove, player1, player2) {
    if (playerOnMove.color == player1.color) {
        return player2;
    } else {
        return player1;
    }
}