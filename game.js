function play() {
	var canvas = document.getElementById("view");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
	} else {
		return;
	}

	//Set Background
	ctx.fillStyle = "black";
	ctx.fillRect(0,0, canvas.width, canvas.height);
	return;
}
