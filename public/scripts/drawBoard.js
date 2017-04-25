function drawBoard(board, selectionCoords) {
	const $gameCanvas = $('#game-canvas');
	const POS_STEP = ($gameCanvas[0].clientWidth)/8;
	const $gameCanvasContext = $gameCanvas[0].getContext('2d');
	const $backgroundImg = $('#background');
	const $selectionImg = $('#selection');
	let selectionX;
	let selectionY;

	$gameCanvasContext.drawImage($backgroundImg[0], 0, 0);
	
	if (selectionCoords){
		selectionX = selectionCoords.x * POS_STEP;
		selectionY = selectionCoords.y * POS_STEP;
		$gameCanvasContext.drawImage($selectionImg[0], selectionX, selectionY);
	}

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
			((piece.posX) * POS_STEP), 
			((piece.posY) * POS_STEP));
	}
}
