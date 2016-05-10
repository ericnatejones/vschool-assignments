//GLOBAL VARIABLES

var ask = require('readline-sync'),
    gameRunning = true,
    beastAlive = true,
    hp = 200,
    weapons = [
        {
            index: 6,
            name: "Rusty Dagger",
            attackPower: [1, 5]
        }, {
            index: 5,
            name: "Dirk",
            attackPower: [5, 10]
        }, {
            index: 4,
            name: "Short Sword",
            attackPower: [10, 15]
        }, {
            index: 3,
            name: "Long Sword",
            attackPower: [15, 30]
        }, {
            index: 2,
            name: "Flame Sword",
            attackPower: [30, 60]
        }, {
            index: 1,
            name: "Excalibur",
            attackPower: [60, 120]
        }
    ],
    beasts = [
        {
            name: "Dragon",
            healthPower: 300,
            attackPower: [120, 320]
        }, {
            name: "Lich",
            healthPower: 80,
            attackPower: [80, 120],
            hpSpoil: 160,
            weaponSpoil: weapons[5]
        }, {
            name: "Troll",
            healthPower: 40,
            attackPower: [50, 80],
            hpSpoil: 80,
            weaponSpoil: weapons[4]
        }, {
            name: "Giant Spider",
            healthPower: 20,
            attackPower: [30, 50],
            hpSpoil: 40,
            weaponSpoil: weapons[3]
        }, {
            name: "Jigglypuff",
            healthPower: 10,
            attackPower: [15, 30],
            hpSpoil: 20,
            weaponSpoil: weapons[2]
        }, {
            name: "Innocent Rabbit",
            healthPower: 5,
            attackPower: [5, 10],
            hpSpoil: 10,
            weaponSpoil: weapons[1]
        }
    ],
    inventory = [weapons[0]];

//INTRODUCTION

console.log("\nYou're a long way from home, weary traveller. Darkness fills the woods around you, and a tangible evil hangs thick in the air. You're lost, aren't you?");

var name = ask.question("\nToo bad. You've come a long way to die. Tell me, what name should we put on your tombstone?\n");

console.log("\nGods save you, " + name + ". A dragon lurks in these woods, and he's hungry. Go now, find your way out... before it's too late.");

//GAME LOOP

while (gameRunning) {

    var action = ask.question("\nAfter walking through the eerie forest with no incident, you take a brief rest.  The woods are quiet... fow now. Type 'print' to see your inventory, or 'w' to continue your journey.");
    beastAlive = true;

    //PRINT ACTION

    while (action === "print") {
        console.log("\nAdventurer: " + name + "\nHealth: " + hp + "\nInventory: " + inventory[inventory.length - 1].name);
        action = ask.question("\nThat's all you've got? Good luck. Type 'print' to see your inventory again, or 'w' to walk.");
    }

    //WRONG BUTTON

    if ((action !== "w") && (action !== "print") && gameRunning) {
        console.log("\nDon't just stand there! Didn't you hear me about the DRAGON?");
    }

    //WALK ACTION

    while (action === "w") {

        //ENCOUNTER CHANCE

        var encounterChance = Math.floor((Math.random() * 10));

        //BEAST ENCOUNTERED

        if (encounterChance < 3) {

            //WHICH BEAST

            var whichBeast = (Math.floor(Math.random() * beasts.length));
            var beastEncountered = beasts[whichBeast];
            console.log("\nA " + beastEncountered.name + " bursts from the foliage ahead!\n");
            var sneakAttack = false;

            //FIGHT OR FLEE

            var fightOrFlight = ask.question("Will you run like a coward? Or fight like a fool? Type 'fight' to attack or 'run' to flee like a sissy.\n");

            //WRONG BUTTON

            if ((fightOrFlight !== "run") && (fightOrFlight !== "fight")) {
                fightOrFlight = ask.question("Choose, you fool! Before the " + beastEncountered.name + " slaughters you where you stand! Type 'fight' to attack or 'run' to flee like a sissy!\n");
                var deathToggle = true;
                if ((deathToggle) && (fightOrFlight !== "run") && (fightOrFlight !== "fight")) {
                    gameRunning = false;
                    action = "dead";
                    console.log(gameRunning);
                    console.log("Frozen with fear, you're defenseless as the " + beastEncountered.name + " rips into your chest and devours your insides. Screaming in agony, your final moments of torture are steeped in a single clear thought: You died a little chicken.");
                    return;

                }
            }

            //FLEE

            if (fightOrFlight === "run") {

                //FLEE CHANCE

                function flee() {
                    var fleeChance = Math.floor((Math.random() * 10));
                    if (fleeChance < 5) {
                        console.log("\nYour sissy backside managed to escape. Now you just have to live with yourself as you continue on your way.");
                        beastAlive = false;
                        return;
                    }

                    //IF FLEE FAILES
                    else {
                        sneakAttack = true;
                        fightOrFlight = "fight";
                    }

                }
                flee();
            }

            if (fightOrFlight === "fight") {

                //ENEMY ATTACK FUNCTION

                function beastAttack(beastAttackPower) {

                    console.log("The " + beastEncountered.name + " swipes its deadly claws and hits you for " + beastAttackPower + "!");
                    hp = hp - beastAttackPower;
                }

                //FIGHT FUNCTION!

                function fight() {

                    //LOCALIZE ENEMY HEALTH

                    var thisBeastHealthPower = beastEncountered.healthPower,
                        weaponEquipped = inventory[0];

                    while (beastAlive) {

                        //RANDOM ATTACK VALUES

                        var beastAttackPower = Math.floor(Math.random() * (beastEncountered.attackPower[1] - beastEncountered.attackPower[0] + 1) + beastEncountered.attackPower[0]),
                            yourAttackPower = Math.floor(Math.random() * (weaponEquipped.attackPower[1] - weaponEquipped.attackPower[0] + 1) + weaponEquipped.attackPower[0]);

                        //IF YOU TRIED TO RUN AND FAILED

                        if (sneakAttack === true) {
                            console.log("\nIt's too fast! You couldn't escape!\n");
                            beastAttack(beastAttackPower);
                            sneakAttack = false;
                            continue;
                        }

                        //YOUR ATTACK

                        console.log("\nYou slash at the " + beastEncountered.name + " with your " + weaponEquipped.name + " do " + yourAttackPower + " damage!\n");
                        thisBeastHealthPower = thisBeastHealthPower - yourAttackPower;
                        if (thisBeastHealthPower < 1) {
                            if (beastEncountered.name === "Dragon") {
                                gameRunning = false;
                                action = "win";
                                console.log("The Dragon roars in pain as you pierce its massive heart with your blade, then it falls to the mossy floor, lifeless. \nWell I'll be. Somehow you've managed to not be completely useless. The dragon is dead, and in his torn throat you find a fire crystal. You'll be rich. Filthy rich! And now you have the light to find your way. Well done, weary traveller. You can finally go home.\n");
                                return;
                            }

                            //BEAST DEFEATED! SPOILS

                            hp = hp + beastEncountered.hpSpoil;

                            if (weaponEquipped.index > beastEncountered.weaponSpoil.index) {
                                inventory.push(beastEncountered.weaponSpoil);
                                inventory.shift();

                                hp = hp + beastEncountered.hpSpoil;
                            }

                            //BEAST DEFEATED! MESSAGE

                            console.log("\n \nThe " + beastEncountered.name + " slips from your blade and collapses in a lifeless heap. A valiant fight, " + name + ", but you have to keep moving.");
                            beastAlive = false;
                            action = "win";
                            break;
                        }

                        //BEAST KILLS YOU
                        else {
                            beastAttack(beastAttackPower);
                            if (hp < 0) {
                                gameRunning = false;
                                action = "dead";

                                console.log("\nThe " + beastEncountered.name + " knocks your weapon from your hands, and with a chilling roar, rips into your chest and devours your insides. Screaming in agony, your final moments of torture are steeped in a single clear thought: You shouldn't have taken the shortcut today. At least you died a brave soul. Stupid. But brave.\n");
                                return;
                            }

                            //YOU STRIKE THE BEAST BUT IT'S STILL ALIVE

                            var battleQuestion = ask.question("\nIt's still alive, and you only have " + hp + " health left! Hurry, what now? Type 'fight' to attack again or 'run' to escape like a coward!");
                            if (battleQuestion === "run") {

                                flee();
                            }
                        }
                    }
                }

                //RE-INITIATE FIGHT IF BEAST IS STILL ALIVE

                if (fightOrFlight === "fight") {
                    fight();
                }
            }

            //OR RUN FOR YOUR LIFE

            action = "flee";

        }

        //END OF BEAST ENCOUNTER
        else {
            break;
        }

    }

    //END OF WALK LOOP

}

//END OF LOOPING GAME