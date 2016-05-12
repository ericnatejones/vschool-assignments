function Enemy(enemyType, enemyHitPoints) {

    this.type = enemyType;
    this.hitPoints = enemyHitPoints;
    this.defense = enemyHitPoints * 3;
}

function typeChooser() {

    var types = [

        {
            name: "Ancient Dragon",
            hitPoints: [80, 100]
        }, {
            name: "Prowler",
            hitPoints: [50, 79]
        }, {
            name: "Mighty Grunt",
            hitPoints: [20, 49]
        }
    ];

    var index = Math.floor(Math.random() * types.length);
    return types[index];
}

function statGenerator(typeChosen) {
    return Math.floor(Math.random() * (typeChosen.hitPoints[1] - typeChosen.hitPoints[0] + 1) + typeChosen.hitPoints[0]);
}

function generateEnemies(howMany) {

    var storedEnemies = [];

    for (var i = 0; i < howMany; i++) {

        var type = typeChooser();

        var newEnemy = new Enemy(type.name, statGenerator(type));
        storedEnemies.push(newEnemy);
    }

    console.log(storedEnemies);
};

generateEnemies(100);