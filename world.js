function World() {
    var hero = new Hero();
    var entities = [];
    var ground = [];

    for (var i = 0; i < 50; i++) {
        ground[i] = 0;
    }

    ground[0] = 1;
    ground[10] = 2;
    ground[13] = 3;
    ground[15] = 1;

    this.events = function(event) {
        var key = event.keyCode || event.which;
        switch (key) {
            // Left
            case 37:
                if(this.positionIsEmpty(hero.getPosition()-1) && ground[hero.getPosition()-1] === 0) {
                    hero.move(-1);
                }
                break;
            // Right
            case 39:
                if(this.positionIsEmpty(hero.getPosition()+1) && ground[hero.getPosition()+1] === 0) {
                    hero.move(+1);
                }
                break;
            case 38:
                hero.changeTool(+1);
                break;
            case 40:
                hero.changeTool(-1);
                break;
            default:
                console.log("U broke evrythin, cos' u pressd: " + key);
        }
        display.update();
    }

    this.enemyAdd = function(position) {
        entities[position] = new Enemy(position);
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
        return typeof entities[position] === 'undefined';
    }
}
