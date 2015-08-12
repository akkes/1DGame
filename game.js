var world = new World();
var display = new Display(world);

function play() {
	display.position();
	world.enemyAdd(Math.ceil(Math.random()*40+3));
	world.enemyAdd(Math.ceil(Math.random()*40+3));
	world.enemyAdd(Math.ceil(Math.random()*40+3));
	display.update();
}
