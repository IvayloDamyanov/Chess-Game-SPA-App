describe('Chess Logic Tests', () => {
    describe('Pieces Tests', () => {
        describe('Pawn Tests', () => {
            it('expect Pawn to be constructed properly', () => {
                const pawn = new Pawn("white", 0, 6);
                const typeOfFigure = "Pawn";
                const moves = [];

                expect(pawn.type).to.equal(typeOfFigure);
                expect(pawn.isMoved).to.equal(false);
                expect(pawn.moves).to.deep.equal(moves);
            });

            it('expect getMoves method of Pawn to add two moves  to array when the figure is white', () => {
                const pawn = new Pawn("white", 4, 6);
                const gameBoard = new Board();

                pawn.getMoves(gameBoard.board);

                expect(pawn.moves).to.have.length(2);
                expect(pawn.moves).to.deep.equal([
                    [0, -1],
                    [0, -2]
                ]);
            });

            it('expect getMoves method of Pawn to add [-1, -1] to moves when the figure is white', () => {
                const pawn = new Pawn("white", 4, 6);
                const gameBoard = new Board();

                gameBoard.board[4][5] = pawn;
                gameBoard.board[3][5] = pawn;

                pawn.getMoves(gameBoard.board);

                expect(pawn.moves).to.have.length(2)
                expect(pawn.moves).to.deep.equal([
                    [],
                    [-1, -1]
                ]);
            });

            it('expect getMoves method of Pawn to add [1, -1] to moves when the figure is white', () => {
                const pawn = new Pawn("white", 0, 6);
                const gameBoard = new Board();

                gameBoard.board[0][5] = pawn;
                gameBoard.board[1][5] = pawn;

                pawn.getMoves(gameBoard.board);

                expect(pawn.moves).to.have.length(2);
                expect(pawn.moves).to.deep.equal([
                    [],
                    [1, -1]
                ]);
            });

            it('expect getMoves method of Pawn to add two moves to array when the figure is black', () => {
                const pawn = new Pawn("black", 1, 1);
                const gameBoard = new Board();

                pawn.getMoves(gameBoard.board);

                expect(pawn.moves).to.have.length(2);
                expect(pawn.moves).to.deep.equal([
                    [0, 1],
                    [0, 2]
                ]);
            });

            it('expect getMoves method of Pawn to add [-1, 1] to moves when the figure is black', () => {
                const pawn = new Pawn("black", 1, 1);
                const gameBoard = new Board();

                gameBoard.board[1][2] = pawn;
                gameBoard.board[0][2] = pawn;

                pawn.getMoves(gameBoard.board);

                expect(pawn.moves).to.have.length(2)
                expect(pawn.moves).to.deep.equal([
                    [],
                    [-1, 1]
                ]);
            });

            it('expect getMoves method of Pawn to add [1, 1] to moves when the figure is black', () => {
                const pawn = new Pawn("black", 1, 1);
                const gameBoard = new Board();

                gameBoard.board[1][2] = pawn;
                gameBoard.board[2][2] = pawn;

                pawn.getMoves(gameBoard.board);

                expect(pawn.moves).to.have.length(2);
                expect(pawn.moves).to.deep.equal([
                    [],
                    [1, 1]
                ]);
            });

            it('expect move to return true', () => {
                const pawn = new Pawn("black", 3, 1);
                const gameBoard = new Board();

                const result = pawn.move(gameBoard.board, 3, 3);

                expect(pawn.posX).to.equal(3);
                expect(pawn.posY).to.equal(3);
                expect(pawn.isMoved).to.equal(true);
                expect(result).to.equal(true);
            });

            it('expect move to return false', () => {
                const pawn = new Pawn("black", 3, 1);
                const gameBoard = new Board();

                const result = pawn.move(gameBoard.board, 4, 3);

                expect(result).to.equal(false);
            });
        });

        describe('King Tests', () => {
            it('expect King to be constructed properly', () => {
                const king = new King("black", 4, 7);
                const typeOfFigure = "King";
                const moves = [];
                const standardMoves = [
                    [1, -1],
                    [1, 0],
                    [1, 1],
                    [0, 1],
                    [-1, 1],
                    [-1, 0],
                    [-1, -1],
                    [0, -1]
                ];

                expect(king.type).to.equal(typeOfFigure);
                expect(king.isMoved).to.equal(false);
                expect(king.moves).to.deep.equal(moves);
                expect(king.standartMoves).to.deep.equal(standardMoves);
            });

            it('expect getMoves method of King to add [2, 0] and [-2, 0] move  to array when the figure is white', () => {
                const king = new King("black", 4, 0);
                const rook = new Rook("black", 7, 7);
                const gameBoard = new Board();

                gameBoard.board[7][0] = rook;
                gameBoard.board[0][0] = rook;

                king.getMoves(gameBoard.board);

                expect(king.moves).to.have.length(10);
            });

            it('expect move to return true', () => {
                const king = new King("black", 4, 0);
                const rook = new Rook("black", 7, 7);
                const gameBoard = new Board();

                gameBoard.board[7][0] = rook;
                gameBoard.board[0][0] = rook;

                const result = king.move(gameBoard.board, 5, 1);

                expect(king.posX).to.equal(5);
                expect(king.posY).to.equal(1);
                expect(king.isMoved).to.equal(true);
                expect(result).to.equal(true);
            });

            it('expect move to return false', () => {
                const king = new King("black", 4, 0);
                const rook = new Rook("black", 7, 7);
                const gameBoard = new Board();

                gameBoard.board[7][0] = rook;
                gameBoard.board[0][0] = rook;

                const result = king.move(gameBoard.board, 6, 1);

                expect(result).to.equal(false);
            });
        });

        describe('Knight Tests', () => {
            it('expect Knight to be constructed properly', () => {
                const knight = new Knight("black", 1, 0);
                const typeOfFigure = "Knight";
                const moves = [
                    [-1, -2],
                    [-2, -1],
                    [-2, 1],
                    [-1, 2],
                    [1, 2],
                    [2, 1],
                    [2, -1],
                    [1, -2]
                ];

                expect(knight.type).to.equal(typeOfFigure);
                expect(knight.moves).to.deep.equal(moves);
            });

            it('expect Knight move method to change posX and posY', () => {
                const knight = new Knight("black", 1, 0);
                const gameBoard = new Board();

                const result = knight.move(gameBoard.board, 2, 2);

                expect(knight.posX).to.equal(2);
                expect(knight.posY).to.equal(2);
            });

            it('expect Knight move method to return true', () => {
                const knight = new Knight("black", 1, 0);
                const gameBoard = new Board();

                const result = knight.move(gameBoard.board, 2, 2);

                expect(result).to.equal(true);
            });
        });
    });
});