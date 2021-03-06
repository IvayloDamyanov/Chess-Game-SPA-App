$(window).ready(function () {
	var promise = new Promise(function(resolve, reject){
		if(true){
			setTimeout(resolve, 300);
		}
	});

	promise.then(function(){
		const CANVAS_SIZE = 512;

		let gameBoard = new Board();
		let player1 = new Player("white", "Whitey");
		let player2 = new Player("black", "Blacky");
			
		gameBoard.initializeBoard();
		drawBoard(gameBoard.board);
		
		var $canvas = $('#game-canvas');
		let selectedPiece;
		
		let player = player1;
		let winner = false;

		$canvas.on("click", function(evt) {
			let mousePos = getMousePos($canvas, evt); //mouse position in pixels
			let selectionCoords = getCoords(mousePos); //returns xPos and yPos of of selection
			if (selectedPiece && (player.color == selectedPiece.color)){
				let oldX = selectedPiece.posX;
				let oldY = selectedPiece.posY;
				if (selectedPiece.move(gameBoard.board, selectionCoords.x, selectionCoords.y)){
					gameBoard.clearField(gameBoard.board, oldX, oldY);
					gameBoard.movePiece(gameBoard.board, selectedPiece);
					player = swapPlayer(player, player1, player2);
				}
				selectedPiece = false;
				winner = gameBoard.checkGameOver(gameBoard.board, player1, player2);
				if(winner){
					alert(winner.name + " wins");
				}
			} else if (gameBoard.checkField(selectionCoords.x, selectionCoords.y)){
				selectedPiece = gameBoard.selectPiece(selectionCoords.x, selectionCoords.y);
			}
			drawBoard(gameBoard.board, selectionCoords);
		});
	});
});
