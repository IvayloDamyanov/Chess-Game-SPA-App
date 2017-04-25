window.addEventListener('load', function () {
	const CANVAS_SIZE = 512;
	
	let gameBoard = new Board;	
	gameBoard.initializeBoard();
	drawBoard(gameBoard.board);
	
	var $canvas = $('#game-canvas');

    $canvas.on("click", function(evt) {
        let mousePos = getMousePos($canvas, evt); //mouse position in pixels
		let selectionCoords = getCoords(mousePos); //returns xPos and yPos of of selection
		console.log(selectionCoords.x + ", " +selectionCoords.y);
		
		drawBoard(gameBoard.board, selectionCoords);
    });

    
	// $body = $("body");
	// $body.append($("<div />")
	// 	.attr("id", "game-canvas-container")
	// 	.css("width", CANVAS_SIZE+"px")
	// 	.css("height", CANVAS_SIZE+"px")
	// 	.css("margin", "0px auto")
	// 	.css("border", "2px solid black")
	// );
	// $gameCanvasContainer = $("#game-canvas-container");
	// $gameCanvasContainer.append($('<canvas />')
	// 	.attr("id", "game-canvas")
	// 	.attr("width", CANVAS_SIZE+"px") //don't change to .css, breaks visualization
	// 	.attr("height", CANVAS_SIZE+"px") //don't change to .css, breaks visualization
	// );


	// function gameLoop() {
	// 	drawBoard(gameBoard.board);
		
	// 	window.requestAnimationFrame(gameLoop);
	// }

	// gameLoop();
});
