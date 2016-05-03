// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Braniac", "General Zod", "Doomsday"];

function whoWins(isThereKryptonite, enemyName) {

    if (!isThereKryptonite) {

        if (enemyName !== "Batman") {

            return ("Who would win, " + enemyName + " or Superman? Superman beats " + enemyName + ", of course.");
        } else {

            return ("Who would win, " + enemyName + " or Superman? Batman always wins.");
        }
    } else {

        return ("Who would win, " + enemyName + " or Superman? There's Kryptonite, so it depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.");
    }
}

for (i = 0; i < enemies.length; i++) {

    var isThereKryptonite = (i % 2 === 0);
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

console.log("'How attracted is Lois Lane to me?'")

console.log("'Are you Superman?'")

var clarkKent = true,
    superman = false;

function quickChange() {

    var phoneBoothQuickChange = Math.random();

    if (phoneBoothQuickChange >= 0.5) {

        clarkKent = false;
        superman = true;
        console.log("'Yes! I'm Superman!'");

    } else {

        console.log("'I'm just a nerdy columnist'");
    }
}

quickChange();

var levelOfCrazy = Math.floor((Math.random() * 10) + 10);

if (superman === true) {

    console.log("'On a scale of mostly crazy to super crazy, you're a solid " + levelOfCrazy + ". Of course Lois Lane's attracted to you. She's so attracted to you it cannot be measured. You're freaking Superman. Every woman on the planet wants you.'");

} else {

    console.log("'Lois Lane would never be attracted to you. She's hooking up with Superman. On a scale of mostly crazy to super crazy, you're a solid " + levelOfCrazy + ".'");
}