var world = new World();
var display = new Display(world);

function play() {
	display.position();
	world.enemyAdd(5);
	world.enemyAdd(7);
	display.update();
}
