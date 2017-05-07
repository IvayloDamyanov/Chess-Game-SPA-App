window.addEventListener('load', function () {
	const CANVAS_SIZE = 512;
	
	let gameBoard = new Board;	
	gameBoard.initializeBoard();
	drawBoard(gameBoard.board);
	
	var $canvas = $('#game-canvas');
	let selectedPiece;
	let player1 = new Player("white", "Pesho");
	let player2 = new Player("black", "Tosho");
	let player = player1;

    $canvas.on("click", function(evt) {
        let mousePos = getMousePos($canvas, evt); //mouse position in pixels
		let selectionCoords = getCoords(mousePos); //returns xPos and yPos of of selection
		if (selectedPiece && (player.color == selectedPiece.color)){
			let oldX = selectedPiece.posX;
			let oldY = selectedPiece.posY;
			if (selectedPiece.move(gameBoard.board, selectionCoords.x, selectionCoords.y)){
				gameBoard.clearField(oldX, oldY);
				gameBoard.movePiece(gameBoard.board, selectedPiece);
				player = swapPlayer(player, player1, player2);
			}
			selectedPiece = false;
		} else if (gameBoard.checkField(selectionCoords.x, selectionCoords.y)){
			selectedPiece = gameBoard.selectPiece(selectionCoords.x, selectionCoords.y);
		}
		drawBoard(gameBoard.board, selectionCoords);
    });
});
