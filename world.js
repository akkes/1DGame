function World() {
    var hero = new Hero();
    var entities = [];
    var ground = [];

    for (var i = 0; i < 50; i++) {
        ground[i] = Math.random() * 2;
    }

    ground[0] = 10;
    ground[45] = 10;

    this.events = function(event) {
        var key = event.keyCode || event.which;
        switch (key) {
            // Left
            case 37:
                if(this.positionIsEmpty(hero.getPosition()-1)) {
                    hero.move(-1);
                }
                break;
            // Right
            case 39:
                if(this.positionIsEmpty(hero.getPosition()+1)) {
                    hero.move(+1);
                }
                break;
            case 32:
                hero.wait();
                break;
            default:
                console.log("U broke evrythin, cos' u pressd: " + key);
                return;
        }
        for (var i = 0; i < entities.length; i++) {
            entities[i].move();
        }
        display.update();
    }

    this.enemyAdd = function(position) {
        entities.push(new Enemy(this, position));
    }

    this.getGround = function() {
        return ground;
    }

    this.getEntities = function() {
        return entities;
    }

    this.getHero = function() {
        return hero;
    }

    this.positionIsEmpty = function(position) {
        for (var i = 0; i < entities.length; i++) {
            if (entities[i].getPosition() === position) {
                entities[i].hit();
                if (entities[i].getLifeRatio() === 0) {
                    entities.splice(i, 1);
                }
                return false;
            }
        }

        if (hero.getPosition() === position) {
            hero.hit();
            return false;
        }
        return ground[position] < 10;
    }
}
