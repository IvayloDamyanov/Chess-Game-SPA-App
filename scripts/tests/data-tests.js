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

        describe('Bishop Tests', () => {
            it('expect Bishop to be constructed properly', () => {
                const bishop = new Bishop("black", 2, 0);
                const typeOfFigure = "Bishop";
                const moves = [];

                expect(bishop.posX).to.equal(2);
                expect(bishop.posY).to.equal(0)
                expect(bishop.moves).to.deep.equal(moves);
            });

            it('expect move method to change posX and posY and to return true', () => {
                const bishop = new Bishop("black", 2, 0);
                const gameBoard = new Board();

                const result = bishop.move(gameBoard.board, 3, 1);

                expect(bishop.posX).to.equal(3);
                expect(bishop.posY).to.equal(1);
                expect(result).to.equal(true);
            });

            it('expect move method to return false', () => {
                const bishop = new Bishop("black", 2, 0);
                const gameBoard = new Board();

                const result = bishop.move(gameBoard.board, 10, 1);

                expect(result).to.equal(false);
            });
        });

        describe('Rook Tests', () => {
            it('expect to construct Rook properly', () => {
                const rook = new Rook("white", 7, 7);
                const typeOfFigure = "Rook";
                const moves = [];

                expect(rook.posX).to.equal(7);
                expect(rook.posY).to.equal(7);
                expect(rook.type).to.equal(typeOfFigure);
                expect(rook.isMoved).to.equal(false);
                expect(rook.moves).to.deep.equal(moves);
            });

            it('expect move method to change posX and PosY and return true', () => {
                const rook = new Rook("black", 7, 0);
                const gameBoard = new Board();

                const result = rook.move(gameBoard.board, 7, 7);

                expect(rook.posX).to.equal(7);
                expect(rook.posY).to.equal(7);
                expect(result).to.equal(true);
            });

            it('expect move method to return false', () => {
                const rook = new Rook("black", 7, 0);
                const gameBoard = new Board();

                const result = rook.move(gameBoard.board, 1, 7);

                expect(result).to.equal(false);
            });
        });

        describe('Queen Tests', () => {
            it('expect Queen to be constructed properly', () => {
                const queen = new Queen("black", 3, 0);
                const typeOfFigure = "Queen";
                const moves = [];

                expect(queen.posX).to.equal(3);
                expect(queen.posY).to.equal(0);
                expect(queen.type).to.equal(typeOfFigure);
                expect(queen.moves).to.deep.equal(moves);
            });

            it('expect move method to change posX and posY and to return true', () => {
                const queen = new Queen("black", 3, 0);
                const gameBoard = new Board();

                const result = queen.move(gameBoard.board, 4, 0);

                expect(queen.posX).to.equal(4);
                expect(queen.posY).to.equal(0);
                expect(result).to.equal(true);
            });

            it('expect move method to return false', () => {
                const queen = new Queen("black", 3, 0);
                const gameBoard = new Board();

                const result = queen.move(gameBoard.board, 5, 1);

                expect(result).to.equal(false);
            });
        });
    });

    describe('Board tests', () => {
        it('expect to initialize board correctly', () => {
            const board = new Board();

            board.initializeBoard();

            const pieces = [
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
            ];

            expect(board.pieces).to.deep.equal(pieces);
        });

        it('expect check field method to return true', () => {
            const board = new Board();

            board.initializeBoard();

            const result = board.checkField(4, 0);

            expect(result).to.equal(true);
        });

        it('expect check field method to return false', () => {
            const board = new Board();

            board.initializeBoard();

            const result = board.checkField(4, 4);

            expect(result).to.equal(false);
        });

        it('expect selectPiece to return the selected piece', () => {
            const board = new Board();
            const king = new King("black", 4, 0);

            board.initializeBoard();

            const result = board.selectPiece(4, 0);

            expect(result).to.deep.equal(king);
        });

        it('expect ClearField to clear the selected piece', () => {
            const board = new Board();
            const king = new King("black", 4, 0);

            board.initializeBoard();

            board.clearField(4, 0);

            const result = board.board[4][0];

            expect(result).to.equal(false);
        });

        it('expect movePiece to move the selected piece', () => {
            const board = new Board();
            const bishop = new Bishop("black", 2, 0);

            board.initializeBoard();

            board.movePiece(board.board, bishop);

            const result = board.board[2][0];

            expect(result).to.deep.equal(bishop);
        });

        it('expect pieceUpgrade to upgrade the selected piece', () => {
            const board = new Board();
            const bishop = new Bishop("black", 2, 0);
            const queen = new Queen("black", 2, 0);

            board.initializeBoard();

            board.pieceUpgrade(board.board, bishop);

            const result = board.board[2][0];

            expect(result).to.deep.equal(queen);
        });

        it('expect checkUpgrade to work correctly with black pawn', () => {
            const board = new Board();
            const pawn = new Pawn("black", 2, 7);
            const queen = new Queen("black", 2, 7);

            board.initializeBoard();

            board.checkUpgrade(board.board, pawn);

            const result = board.board[2][7];

            expect(result).to.deep.equal(queen);
        });

        it('expect checkUpgrade to work correctly with white pawn', () => {
            const board = new Board();
            const pawn = new Pawn("white", 2, 0);
            const queen = new Queen("white", 2, 0);

            board.initializeBoard();

            board.checkUpgrade(board.board, pawn);

            const result = board.board[2][0];

            expect(result).to.deep.equal(queen);
        });

        it('expect checkGameOver to return false when hasWhiteKing and hasBlackKing', () => {
            const board = new Board();
            const player1 = new Player("white", "Gosho");
            const player2 = new Player("black", "Pesho");
            const whiteKing = new King("white", 3, 0);
            const blackKing = new King("black", 3, 0);

            board.initializeBoard();

            board.board[3][0] = whiteKing;
            board.board[3][0] = blackKing;

            const result = board.checkGameOver(board.board, player1, player2);

            expect(result).to.equal(false);
        });

        it('expect checkGameOver to return player1', () => {
            const board = new Board();
            const player1 = new Player("white", "Gosho");
            const player2 = new Player("black", "Pesho");

            board.initializeBoard();

            board.board[4][0] = false;

            const result = board.checkGameOver(board.board, player1, player2);

            expect(result).to.deep.equal(player1);
        });

        it('expect checkGameOver to return player2', () => {
            const board = new Board();
            const player1 = new Player("white", "Gosho");
            const player2 = new Player("black", "Pesho");

            board.initializeBoard();

            board.board[4][7] = false;

            const result = board.checkGameOver(board.board, player1, player2);

            expect(result).to.deep.equal(player2);
        });

        it('expect checkGameOver to return false when hasWhiteKing and hasBlackKing are false ', () => {
            const board = new Board();
            const player1 = new Player("white", "Gosho");
            const player2 = new Player("black", "Pesho");

            board.initializeBoard();

            board.board[4][0] = false;
            board.board[4][7] = false;

            const result = board.checkGameOver(board.board, player1, player2);

            expect(result).to.equal(false);
        });
    });
});