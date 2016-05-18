var Party = function (name, population) {
    this.name = name;
    this.population = population;
};

var penguins = new Party("Penguins", 1000000),
    commies = new Party("Commies", 1000000),
    gameRunning = true,
    partyA = penguins,
    partyB = commies,
    coinFlip = Math.random() * 2,
    engine;

if (coinFlip <= 1) {
    var partyB = penguins;
    var partyA = commies;
}

function runGame() {

    function sendNuke(party1, party2, onHit, onMiss) {

        console.log("\nThe " + party1.name + " lose their cool and launch a nuke!");
        var hitChance = Math.random() * 2;

        if (hitChance <= 1) {
            onHit(party1, party2);
        } else {
            onMiss(party2);
        }
    }

    function onHit(party1, party2) {
        var damageDealt = Math.random() * 1000000;
        party2.population = party2.population - damageDealt;
        if (party2.population < 1) {

            console.log("\n\nIt's over. The " + party2.name + " have fallen. Now the " + party1.name + " can celebrate their victory in a broken world, their humanity nothing but a distant memory. Enjoy the frozen wasteland, you soulless monsters.\n");

            clearInterval(engine);

            return;
        }

        console.log("\nOh the humanity! The nuke hit. Nobody wins. Humankind has failed. But the " + party2.name + " failed the most. The population took a loss of " + Math.floor(damageDealt) + ". Only " + Math.floor(party2.population) + " " + party2.name + " remain.");
    }

    function onMiss(party2) {
        console.log("\nThe " + party2.name + "' prayers were heard. The nuke missed and landed in the ocean. Unfortunately, humanity has still failed for even attempting to resort to such mass violence and death.");
    }

    sendNuke(partyA, partyB, onHit, onMiss);

    if (partyA === penguins) {
        partyA = commies;
        partyB = penguins;
    } else {
        partyA = penguins;
        partyB = commies;
    }
}

console.log("\n\nTensions are high. The Commies are encroaching on the icy wastelands of Antarctica. The Penguins have had enough. Desperate for domination or survival, the two powers stare each other down until one of them slips...");

var engine = setInterval(runGame, 10000);