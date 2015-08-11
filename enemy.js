function Enemy(position) {
    var position = position;
    var baseColor = "green";
    var maxLife = 3;
    var life = 3;

    this.getPosition = function() {
        return position;
    }

    this.getColor = function() {
        return baseColor;
    }
}
