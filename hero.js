function Hero() {
    var position = Math.ceil(Math.random()*40+3);
    var inventory = ["walk", "sword", "magic"];
    var weapon = 0;
    var maxLife = 10;
    var life = 10;

    this.move = function(direction) {
        // Parameters verification
        if (direction !== +1 && direction !== -1) {
            console.log("U broke evrythin");
            return false;
        }

        // Is He able to move?
        futurePosition = position + direction;
        if (world.IsThereAWall(futurePosition)) {
            return false;
        }

        // Should he attack?
        entityNumber = world.IsThereAnEntity(futurePosition);
        if (entityNumber !== false) {
            world.getEntities()[entityNumber].hit();
            if (world.getEntities()[entityNumber].getLifeRatio() === 0) {
                world.getEntities().splice(entityNumber,1);
            }
            return true;
        }

        // Should he obtains something?
        objectsNumber = world.IsThereAnObject(futurePosition);
        if (objectsNumber !== false) {
            world.getObjects()[objectsNumber].hit();
            if (world.getObjects()[objectsNumber].getLifeRatio() === 0) {
                world.getObjects().splice(objectsNumber,1);
            }
        }

        // Actually move (Yes! Finally!)
        if (direction === 1) {
            position++;
        } else if (direction === -1) {
            position--;
        }
        return true;
    }

    this.getPosition = function() {
        return position;
    }

    this.changeTool = function(change) {
        if(change === +1){
            weapon++;
            if (weapon === inventory.length) {
                weapon = 0;
            }
        } else if (change === -1) {
            weapon--;
            if (weapon === -1) {
                weapon = inventory.length - 1;
            }
        } else {
            console.console.log("U broke evrythin");
        }
    }

    this.getWeapon = function() {
        return inventory[weapon];
    }

    this.hit = function() {
        life--;
    }

    this.heal = function() {
        life = maxLife;
    }

    this.getLifeRatio = function() {
        return life/maxLife;
    }

    this.wait = function() {
        return
    }
}
