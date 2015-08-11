function Hero() {
    var position = 1;
    var inventory = ["walk", "sword", "magic"];
    var weapon = 0;

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
}
