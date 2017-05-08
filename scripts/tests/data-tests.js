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
    });
});