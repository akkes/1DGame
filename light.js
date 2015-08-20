function Light(world, position) {
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
        return "Light"
    }

    this.hit = function(finder) {
        life--;
        world.getHero().heal();
    }

    this.move = function() {
        return;
    }
}
