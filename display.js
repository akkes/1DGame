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

        // Display world
        var ground = world.getGround();
        var enemies = world.getEnemies();
        for (var i = 0; i < 50; i++) {
            if (ground[i] == 1) {
                pixelDisplay(i, "#aaaaaa");
            } else if (ground[i] == 2) {
                pixelDisplay(i, "#4444ee");
            } else if (ground[i] == 3) {
                pixelDisplay(i, "brown");
            } else  {
                pixelDisplay(i, "#444444");
            }

            if (typeof enemies[i] !== 'undefined') {
                pixelDisplay(i, "green");
            }
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
