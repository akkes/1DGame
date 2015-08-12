var world = new World();
var display = new Display(world);

function play() {
	display.position();
	world.enemyAdd(8);
	world.enemyAdd(10);
	world.enemyAdd(15);
	display.update();
}
