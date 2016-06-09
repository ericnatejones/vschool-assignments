var ask = require('readline-sync'),
    Location = require("./location.js"),
    gameRunning = true,
    shipCount = 0,
    score = 0,
    grid = [];

function createGrid() {
    for (e = 0; e < 10; e++) {

        var smallGrid = [];

        for (i = 0; i < 10; i++) {
            var ship = new Location(e, i);
            smallGrid.push(ship);
            if (ship.ship) {
                shipCount++;
            }
        }
        grid.push(smallGrid);
    }
}

createGrid();

while (gameRunning) {

    if (shipCount < 3) {
        shipCount = 0;
        grid = [];
        createGrid();
    } else {

        var coords = ask.question("Coordinates?");

        coords = coords.split("");

        var coord1 = +coords[0],
            coord2 = +coords[1];

        if ((coords.length > 2) || !(/[0-9]/.test(coord1)) || !(/[0-9]/.test(coord2))) {
            console.log("\nEnter coordinates as a two digit number, 00 through 99.\n")
        } else {

            var strike = grid[coord1][coord2];

            if (strike.hit) {
                console.log("\nYou've already attacked that coordinate!\n");
            } else {
                if (strike.ship) {
                    strike.display = "X";
                    strike.hit = true;
                    score++;
                    if (score === 3) {
                        console.log("\nYou've won!");
                        gameRunning = false;
                        return;
                    } else {
                        console.log("\nDirect hit! Fire again!\n");
                    }
                } else {
                    strike.display = "M";
                    strike.hit = true;
                    console.log("\nYou Missed! Try again.\n");
                }
            }

            var display = "";
            for (e = 0; e < 10; e++) {

                var smallDisplay = "";

                for (i = 0; i < 10; i++) {
                    var coordinate = grid[e][i].display;
                    smallDisplay = smallDisplay + coordinate + "   ";
                }
                display = display + "\t" + smallDisplay + "\n\n";
            }

            console.log(display);
            e
        }
    }
}