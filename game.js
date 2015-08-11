var ctx;
var pixSize;
var pixHeight;

function play() {
	resize();
}

function resize() {
	position();
	display();
}

// Calculate line position & size
function position() {
	var canvas = document.getElementById("view");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		ctx = canvas.getContext("2d");
	} else {
		return;
	}

	// Calculate line position
	pixSize = (ctx.canvas.width - ctx.canvas.width%50)/50;
	console.log("size: " + pixSize + ", modulo: " + ctx.canvas.width%50);
	pixHeight = (ctx.canvas.height - pixSize)/2;
}

// Update Display
function display() {
	// Set Background
	ctx.fillStyle = "black";
	ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);

	// Display line
	ctx.fillStyle = "grey";
	for (var i = 0; i < 50; i++) {
		ctx.fillRect(i*pixSize, pixHeight, pixSize, pixSize);
	}

	// Display Enemies

	// Display Heroes
}
