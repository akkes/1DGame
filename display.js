function Display(world) {
    var world = world;
    var ctx;
    var pixSize;
    var pixHeight;

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

    var pixelDisplay = function(position, color) {
        ctx.fillStyle = color;
        ctx.fillRect(position*pixSize, pixHeight, pixSize, pixSize);
    }

    this.update = function() {
        // Set Background
    	ctx.fillStyle = "black";
    	ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);

        // Display line
        for (var i = 0; i < 50; i++) {
            pixelDisplay(i, "#444444");
        }

        // Display Enemies
        var enemies = world.getEnemies();
        for (var i in enemies) {
            pixelDisplay(enemies[i].getPosition(), enemies[i].getColor());
        }

        // Display Hero
        var hero = world.getHero();
        pixelDisplay(hero.getPosition(), "white");
    }

    this.resize = function() {
        this.position();
        this.update();
    }
}
