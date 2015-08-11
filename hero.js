function Hero() {
    var position = 1;
    var inventory;

    this.move = function(direction) {
        if (direction == 1) {
            position++;
        } else if (direction == -1) {
            position--;
        } else {
            console.console.log("U broke evrythin");
        }
    }

    this.getPosition = function() {
        return position;
    }
}
