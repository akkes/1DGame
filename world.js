function World() {
    var ctx;
    var pixSize;
    var pixHeight;
    var hero = new Hero();
    var enemies = new Array();

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
            pixelDisplay(i, "#444444");
    	}

    	// Display Enemies
        for (var i in enemies) {
            pixelDisplay(enemies[i].getPosition(), enemies[i].getColor());
        }

    	// Display Heroes
        pixelDisplay(hero.getPosition(), "white");

    }

    this.resize = function() {
    	this.position();
    	this.display();
    }

    this.events = function(event) {
        var key = event.keyCode || event.which;
        switch (key) {
            // Left
            case 37:
                hero.move(-1);
                break;
            // Right
            case 39:
                hero.move(+1);
                break;
            default:
                console.log("U broke evrythin");
        }
        this.display();
    }

    var pixelDisplay = function(position, color) {
        ctx.fillStyle = color;
        ctx.fillRect(position*pixSize, pixHeight, pixSize, pixSize);
    }

    this.enemyAdd = function(position) {
        enemies.push(new Enemy(position));
    }
}
