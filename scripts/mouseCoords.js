function getMousePos($canvas, evt) {
    var rect = $canvas[0].getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function getCoords(mousePos) {
    xCoord = Math.floor(mousePos.x / 64);
    yCoord = Math.floor(mousePos.y / 64);
    let coords = {};
    coords.x = xCoord;
    coords.y = yCoord;
    return coords;
}