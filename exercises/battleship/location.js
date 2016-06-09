function Location(e, i) {
    this.ship = false;
    this.hit = false;
    this.display = "O";
    this.coordinates = e + "," + i;
    var chance = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    if (chance === 5) {
        this.ship = true;
    }
}

module.exports = Location;