function World() {
    var hero = new Hero();
    var entities = [];
    var ground = [];
    var objects = [];

    // Define world
    for (var i = 0; i < 50; i++) {
        ground[i] = Math.random() * 2;
    }
    ground[0] = 10;
    ground[45] = 10;

    // Add enemies
    entities.push(new Enemy(this, Math.ceil(Math.random()*40+3)));
    entities.push(new Enemy(this, Math.ceil(Math.random()*40+3)));
    entities.push(new Enemy(this, Math.ceil(Math.random()*40+3)));

    // Add chests
    entities.push(new Chest(this, Math.ceil(Math.random()*40+3)));

    this.events = function(event) {
        var key = event.keyCode || event.which;
        switch (key) {
            // Left
            case 37:
                if(!hero.move(-1)) {
                    return;
                }
                break;
            // Right
            case 39:
                if(!hero.move(+1)) {
                    return;
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

    this.getObjects = function() {
        return objects;
    }

    this.getHero = function() {
        return hero;
    }

    this.IsThereAWall = function(position) {
        return ground[position] >= 10;
    }

    this.IsThereAnEntity = function(position) {
        for (var i = 0; i < entities.length; i++) {
            if (entities[i].getPosition() === position) {
                return i;
            }
        }

        return false;
    }

    this.IsThereAnObject = function(position) {
        for (var i = 0; i < objects.length; i++) {
            if (objects[i].getPosition() === position) {
                return i;
            }
        }

        return false;
    }

    this.IsThereTheHero = function(position) {
        if (hero.getPosition() === position) {
            hero.hit();
            return true;
        }

        return false;
    }

    this.positionIsEmpty = function(position) {
        if(this.IsThereAWall(position)){
            return false;
        }

        if(this.IsThereAnEntity(position)){
            return false;
        }

        if(this.IsThereAnObject(position)){
            return false;
        }

        if(this.IsThereTheHero(position)){
            return false;
        }

        return true;
    }
}
