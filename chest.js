function Chest(world, position) {
    var world = world;
    var position = position;
    var maxLife = 1;
    var life = 1;

    this.getPosition = function() {
        return position;
    }

    this.getLifeRatio = function() {
        return life/maxLife;
    }

    this.getType = function() {
        return "Chest"
    }

    this.hit = function() {
        life--;
        world.getObjects().push(new Light(world, position));
    }

    this.move = function() {
        return;
    }
}
