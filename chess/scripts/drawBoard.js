function drawBoard(pieces) {
	let $gameCanvas = $('#game-canvas');
	let $gameCanvasContext = $gameCanvas[0].getContext('2d');
	let $backgroundImg = $('#background');
	const POS_STEP = ($gameCanvas[0].clientWidth)/8;
	
	$gameCanvasContext.drawImage($backgroundImg[0], 0, 0);
	
	for (var i = 0; i < pieces.length; i += 1){
		drawPiece(pieces[i]);
	}

	function drawPiece(piece){
		var imgselector = "#"+piece.color+piece.type;

		$gameCanvasContext.drawImage(
			$(imgselector)[0], 
			((piece.posX-1) * POS_STEP), 
			((piece.posY-1) * POS_STEP));
	}
}

