function World() {
    var hero = new Hero();
    var enemies = [];
    var ground = [];

    for (var i = 0; i < ground.length; i++) {
        ground[i] = 0;
    }

    ground[10] = 2;
    ground[13] = 3;
    ground[15] = 1;

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
        display.update();
    }

    this.enemyAdd = function(position) {
        enemies[position] = new Enemy(position);
    }

    this.getGround = function() {
        return ground;
    }

    this.getEnemies = function() {
        return enemies;
    }

    this.getHero = function() {
        return hero;
    }
}
