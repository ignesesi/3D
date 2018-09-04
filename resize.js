canvas = document.getElementById ("canvas-id");
var screenSizeX = window.innerWidth, screenSizeY = window.innerHeight;
canvas.width = screenSizeX;
canvas.height = screenSizeY;
var context = canvas.getContext ("2d");
var centerX = screenSizeX/2, centerY = screenSizeY/3;
 
window.addEventListener ("resize", function () {
	screenSizeX = window.innerWidth;
	screenSizeY = window.innerHeight;
	canvas.width = screenSizeX;
	canvas.height = screenSizeY;
	centerX = screenSizeX/2;
	centerY = screenSizeY/2;
}, true);

