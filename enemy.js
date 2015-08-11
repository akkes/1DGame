function Enemy(position) {
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
}
