function World() {
    var hero = new Hero();
    var enemies = new Array();

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
        enemies.push(new Enemy(position));
    }

    this.getEnemies = function() {
        return enemies;
    }

    this.getHero = function() {
        return hero;
    }
}
