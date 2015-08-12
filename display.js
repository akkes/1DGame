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
        for (var i = 0; i < 50; i++) {
            if (ground[i] === 10) {
                pixelDisplay(i, "hsl(0, 0%, 80%)");
            } else if (ground[i] === 20) {
                pixelDisplay(i, "hsl(200, 50%, 33%)");
            } else if (ground[i] === 30) {
                pixelDisplay(i, "hsl(33, 50%, 33%)");
            } else  {
                pixelDisplay(i, "hsl(0, 0%, " + (29+ground[i]) + "%)");
            }
        }

        // Display entities
        var entities = world.getEntities();
        for (var i in entities) {
            pixelDisplay(entities[i].getPosition(), "hsl(83, "+ entities[i].getLifeRatio()*80 +"%, "+ entities[i].getLifeRatio()*50 +"%)")
        }

        // Display Hero
        var hero = world.getHero();
        if (hero.getWeapon() == "magic") {
            pixelDisplay(hero.getPosition(), "hsl(63, 100%, 90%)");
        } else {
            pixelDisplay(hero.getPosition(), "hsl(0, "+ (hero.getLifeRatio()*100) +"%,"+ (hero.getLifeRatio()*60+40) +"%)");
        }
    }

    this.resize = function() {
        this.position();
        this.update();
    }
}
