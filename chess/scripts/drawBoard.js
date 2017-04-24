function drawBoard(board) {
	let $gameCanvas = $('#game-canvas');
	let $gameCanvasContext = $gameCanvas[0].getContext('2d');
	let $backgroundImg = $('#background');
	const POS_STEP = ($gameCanvas[0].clientWidth)/8;
	
	$gameCanvasContext.drawImage($backgroundImg[0], 0, 0);
	
	for (let i = 0; i < board.length; i += 1){
		for (let j = 0; j < board[i].length; j += 1){
			if (board[i][j]){
				drawPiece(board[i][j]);
			}
		}
	}

	function drawPiece(piece){
		let imgselector = "#"+piece.color+piece.type;

		$gameCanvasContext.drawImage(
			$(imgselector)[0], 
			((piece.posX-1) * POS_STEP), 
			((piece.posY-1) * POS_STEP));
	}
}

