//GLOBAL VARIABLES

var ask = require('readline-sync'),
    gameRunning = true,
    beastAlive = true,
    hp = 25,
    weapons = [
        {
            index: 6,
            name: "Rusty Dagger",
            attackPower: [2, 4]
        }, {
            index: 5,
            name: "Dirk",
            attackPower: [3, 5]
        }, {
            index: 4,
            name: "Short Sword",
            attackPower: [4, 6]
        }, {
            index: 3,
            name: "Long Sword",
            attackPower: [5, 7]
        }, {
            index: 2,
            name: "Flame Sword",
            attackPower: [6, 8]
        }, {
            index: 1,
            name: "Excalibur",
            attackPower: [10, 20]
        }
    ],
    beasts = [
        {
            name: "Dragon",
            healthPower: 50,
            attackPower: [15, 20]
        }, {
            name: "Lich",
            healthPower: 35,
            attackPower: [7, 9],
            hpSpoil: 25,
            weaponSpoil: weapons[5]
        }, {
            name: "Troll",
            healthPower: 25,
            attackPower: [6, 8],
            hpSpoil: 20,
            weaponSpoil: weapons[4]
        }, {
            name: "Giant Spider",
            healthPower: 18,
            attackPower: [5, 7],
            hpSpoil: 16,
            weaponSpoil: weapons[3]
        }, {
            name: "Jigglypuff",
            healthPower: 13,
            attackPower: [4, 6],
            hpSpoil: 13,
            weaponSpoil: weapons[2]
        }, {
            name: "Innocent Rabbit",
            healthPower: 8,
            attackPower: [2, 4],
            hpSpoil: 10,
            weaponSpoil: weapons[1]
        }
    ],
    inventory = [weapons[0]],
    action,
    fightorFlight,
    name;

//INTRODUCTION

function introduction() {

    console.log("\n\n\nYou're a long way from home, weary traveller. Darkness fills the woods around you, and a tangible evil hangs thick in the air. You're lost, aren't you?");

    name = ask.question("\nToo bad. You've come a long way to die. Tell me, what name should we put on your tombstone?\n");

    console.log("\nGods save you, " + name + ". A dragon lurks in these woods, and he's hungry. Go now, find your way out... before it's too late.");

    action = ask.question("\nAfter walking through the eerie forest with no incident, you take a brief rest.  The woods are quiet... for now. Type 'print' to see your inventory, or 'w' to continue your journey.\n");
}

//CHOICE

function choice() {
    action = ask.question("\nAfter walking through the eerie forest with no incident, you take a brief rest.  The woods are quiet... for now. Type 'print' to see your inventory, or 'w' to continue your journey.\n");
    return;
}

//PRINT

function print() {
    console.log("\nAdventurer: " + name + "\nHealth: " + hp + "\nInventory: " + inventory[inventory.length - 1].name);
    action = ask.question("\nThat's all you've got? Good luck. Type 'print' to see your inventory again, or 'w' to walk.\n");
}

//WALK

function walk() {

    var encounterChance = Math.random() * 10;

    if (encounterChance < 3.4) {

        encounter();
    }
}

//ENCOUNTER

function encounter() {

    var whichBeast = (Math.floor(Math.random() * beasts.length)),
        beastEncountered = beasts[whichBeast],
        thisBeastHealthPower = beastEncountered.healthPower,
        weaponEquipped = inventory[0];

    beastAlive = true;

    console.log("\nA " + beastEncountered.name + " bursts from the foliage ahead!");
    fightOrFlight = ask.question("\nWill you run like a coward? Or fight like a fool? Type 'fight' to attack or 'run' to flee like a sissy!\n");

    while (beastAlive) {

        var sneakAttack = false,
            beastAttackPower = Math.floor(Math.random() * (beastEncountered.attackPower[1] - beastEncountered.attackPower[0] + 1) + beastEncountered.attackPower[0]),
            yourAttackPower = Math.floor(Math.random() * (weaponEquipped.attackPower[1] - weaponEquipped.attackPower[0] + 1) + weaponEquipped.attackPower[0]);



        if (fightOrFlight === "fight") {

            thisBeastHealthPower = thisBeastHealthPower - yourAttackPower;

            var beastStatus = thisBeastHealthPower / beastEncountered.healthPower,
                beastStatusMessage;

            if (beastStatus < .15) {
                beastStatusMessage = "Its intestines are trailing across the floor!";
            } else if (beastStatus < .30) {
                beastStatusMessage = "It's desperate! You've almost done it!";
            } else if (beastStatus < .60) {
                beastStatusMessage = "Gods! Look at all the blood!";
            } else if (beastStatus < .80) {
                beastStatusMessage = "Wow. You've managed to actually draw blood.";
            } else {
                beastStatusMessage = "Oh come on. You've hardly scratched it!";
            }

            console.log("\nYou slash at the " + beastEncountered.name + " with your " + weaponEquipped.name + " do " + yourAttackPower + " damage! " + beastStatusMessage);

            if (thisBeastHealthPower < 1) {

                victory(beastEncountered, weaponEquipped);
            } else {
                beastAttack(beastEncountered, beastAttackPower);
                if (hp < 1) {
                    return;
                } else {
                    fightOrFlight = ask.question("\nIt's still alive, and you only have " + hp + " health left! Hurry, what now? Type 'fight' to attack again or 'run' to escape like a coward!\n");
                    continue;
                }
            }
        } else if (fightOrFlight === "run") {
            flee(beastEncountered, beastAttackPower);
        } else {
            wrongButton(beastEncountered);
        }
    }
}

function flee(beastEncountered, beastAttackPower) {
    var fleeChance = Math.floor((Math.random() * 10));
    if (fleeChance < 5) {
        console.log("\nYour sissy backside managed to escape. Now you just have to live with yourself as you continue on your way.");
        beastAlive = false;
        choice();
    }

    //IF FLEE FAILS
    else {

        console.log("\nIt's too fast! You couldn't escape!");
        beastAttack(beastEncountered, beastAttackPower);
        if (hp < 1) {
            return;
        } else {
            fightOrFlight = ask.question("\nDon't just stand there! You only have " + hp + " health left! Keep running or turn and fight! Type 'run' to keep running or 'fight' to attack.\n");
            //        return;
        }
    }
}

//WRONG BUTTON

function wrongButton(beastEncountered) {
    fightOrFlight = ask.question("\nChoose, you fool! Before the " + beastEncountered.name + " slaughters you where you stand! Type 'fight' to attack or 'run' to flee like a sissy!\n");

    var deathToggle = true;

    if ((deathToggle) && (fightOrFlight !== "run") && (fightOrFlight !== "fight")) {
        gameRunning = false;
        action = "dead";
        beastAlive = false;
        hp = 0;
        console.log("\nFrozen with fear, you're defenseless as the " + beastEncountered.name + " rips into your chest and devours your insides. Screaming in agony, your final moments of torture are steeped in a single clear thought: You died a little chicken.\n\n\n");
        return;
    }
    return;
}
//BEAST ATTACK


function beastAttack(beastEncountered, beastAttackPower) {

    console.log("\nThe " + beastEncountered.name + " swipes its deadly claws and hits you for " + beastAttackPower + "!");
    hp = hp - beastAttackPower;
    if (hp < 1) {
        gameRunning = false;
        action = "dead";
        beastAlive = false;

        console.log("\nThe " + beastEncountered.name + " knocks your weapon from your hands, and with a chilling roar, rips into your chest and devours your insides. Screaming in agony, your final moments of torture are steeped in a single clear thought: You shouldn't have taken the shortcut today. At least you died a brave soul. Stupid. But brave.\n\n\n");
        return;
    }
    return;
}

//WIN

function victory(beastEncountered, weaponEquipped) {

    if (beastEncountered.name === "Dragon") {
        gameRunning = false;
        action = "win";
        beastAlive = false;
        console.log("\nThe Dragon roars in pain as you pierce its massive heart with your blade, then it falls to the mossy floor, lifeless. \nWell I'll be. Somehow you've managed to not be completely useless. The dragon is dead, and in his torn throat you find a fire crystal. You'll be rich. Filthy rich! And now you have the light to find your way. Well done, weary traveller. You can finally go home.\n\n\n");
        return;
    } else {

        hp = hp + beastEncountered.hpSpoil;

        if (weaponEquipped.index > beastEncountered.weaponSpoil.index) {
            inventory.push(beastEncountered.weaponSpoil);
            inventory.shift();

            hp = hp + beastEncountered.hpSpoil;
        }

        console.log("\nWith a sad whimper, the " + beastEncountered.name + " slips from your blade and collapses in a lifeless heap. A valiant fight, " + name + ", but you have to keep moving.\n");
        beastAlive = false;
        action = "win";
    }
}

introduction();

while (gameRunning) {

    if ((action !== "w") && (action !== "print") && (action !== "dead") && (action !== "win")) {
        action = ask.question("\nDon't just stand there! Didn't you hear me about the DRAGON?\n");
    }

    while (action === "w") {

        walk();
    }

    if ((action !== "w") && (action !== "print") && (action !== "dead") && (action !== "win")) {
        action = ask.question("\nDon't just stand there! Didn't you hear me about the DRAGON?\n");
    }

    while (action === "print") {

        print();
    }

    if ((action !== "w") && (action !== "print") && (action !== "dead") && (action !== "win")) {
        action = ask.question("\nDon't just stand there! Didn't you hear me about the DRAGON?\n");
    }


    if (gameRunning) {
        choice();
    }
}