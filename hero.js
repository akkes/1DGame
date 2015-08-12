function Hero() {
    var position = 1;
    var inventory = ["walk", "sword", "magic"];
    var weapon = 0;
    var maxLife = 10;
    var life = 10;

    this.move = function(direction) {
        if (direction === 1) {
            position++;
        } else if (direction === -1) {
            position--;
        } else {
            console.console.log("U broke evrythin");
        }
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

    this.getLifeRatio = function() {
        return life/maxLife;
    }

    this.wait = function() {
        life = Math.min(life+1, maxLife);
    }
}
