var ask = require('readline-sync');

var character = {
    name: "",
    totalCoins: 0,
    status: "Small",
    star: true,
    setName: function (namePicked) {
        character.name = namePicked;
    },
    gotHit: function () {
        if (character.star) {
            character.star = false;
        } else {
            if (character.status === "Powered Up") {
                character.status = "Big";
            } else if (character.status === "Big") {
                character.status = "Small";
            } else if (character.status === "Small") {
                character.status = "Dead";
                character.gameActive = false;
            }
        }
    },
    gameActive: true,
    gotPowerup: function () {
        if (character.status === "Big") {
            character.status = "Powered Up";
        } else if (character.status === "Small") {
            character.status = "Big";
        }
    },
    addCoin: function () {
        character.totalCoins = character.totalCoins + 1;
    },
    print: function () {
        console.log("\nName: " + character.name + ",\nTotal Coins: " + character.totalCoins + ",\nStatus: " + character.status + ",\nStar: " + character.star + ".");
    }
};

var namePicked = ask.question("A here we go! Are you a Mario or a Luigi?");

while ((namePicked !== "Mario") && (namePicked !== "Luigi")) {
    namePicked = ask.question("It's really not that hard. Mario or Luigi?");
}

function game(namePicked) {

    var chance = Math.floor(Math.random() * 3);

    character.setName(namePicked);

    if (chance === 2) {
        character.addCoin();
    } else if (chance === 1) {
        character.gotPowerup();
    } else if (chance === 0) {
        character.gotHit();
    }

    character.print();
}

game(namePicked);
game(namePicked);
game(namePicked);