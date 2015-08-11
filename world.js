function World() {
    var ctx;
    var pixSize;
    var pixHeight;
    var hero = new Hero();

    // Calculate line position & size
    this.position = function() {
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
    	pixHeight = (ctx.canvas.height - pixSize)/2;
    }

    // Update Display
    this.display = function() {
    	// Set Background
    	ctx.fillStyle = "black";
    	ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);

    	// Display line
    	for (var i = 0; i < 50; i++) {
            pixelDisplay(i, "grey");
    	}

    	// Display Enemies

    	// Display Heroes
        pixelDisplay(hero.getPosition(), "white");

    }

    this.resize = function() {
    	this.position();
    	this.display();
    }

    this.events = function(event) {
        var x = event.which || event.keyCode;
        switch (x) {
            // Left
            case 37:
                hero.move(-1);
                break;
            // Right
            case 39:
                hero.move(+1);
                break;
            default:
                console.console.log("U broke evrythin");
        }
        this.display();
    }

    var pixelDisplay = function(position, color) {
        ctx.fillStyle = color;
        ctx.fillRect(position*pixSize, pixHeight, pixSize, pixSize);
    }
}