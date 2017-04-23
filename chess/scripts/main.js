window.addEventListener('load', function () {
	const CANVAS_SIZE = 512;
	$body = $("body");
	$body.append($('<canvas />'), {
		id: "game-canvas",
		width: CANVAS_SIZE+"px",
		height: CANVAS_SIZE+"px"
	});

	//array of chess pieces for testing, should come from backend logic
	var pieces = [
		{color: "white", type: "King", posX: 1, posY: 1},
		{color: "white", type: "King", posX: 8, posY: 8}
	]
	
	function gameLoop() {
		drawBoard(pieces);

		window.requestAnimationFrame(gameLoop);
	}

	gameLoop();
});
