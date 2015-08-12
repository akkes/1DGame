function Enemy(world, position) {
    var world = world;
    var position = position;
    var maxLife = 3;
    var life = 3;

    this.getPosition = function() {
        return position;
    }

    this.getLifeRatio = function() {
        return life/maxLife;
    }

    this.getType = function() {
        return "Goblin"
    }

    this.hit = function() {
        life--;
    }

    this.move = function() {
        if(world.getHero().getPosition() < position){
            if (world.positionIsEmpty(position-1)) {
                position--;
            }
        } else if(world.getHero().getPosition() > position) {
            if (world.positionIsEmpty(position+1)) {
                position--;
            }
        }
    }
}
