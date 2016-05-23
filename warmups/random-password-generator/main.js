function symbGenerator() {
    var symbolKey = "!@#$%^&*?+";
    var chance = Math.floor(Math.random() * symbolKey.length);
    return symbolKey[chance];
}

function letGenerator() {
    var alphaKey = "abcdefghijklmnopqrstuvwxyz";
    var chance = Math.floor(Math.random() * alphaKey.length);
    return alphaKey[chance];
}

function caseGenerator() {
    var caseKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var chance = Math.floor(Math.random() * caseKey.length);
    return caseKey[chance];
}

function numGenerator() {
    var numKey = "0123456789";
    var chance = Math.floor(Math.random() * numKey.length);
    return numKey[chance];
}

function generatePassword(length) {
    var password = "";
    for (i = 4; i < length; i++) {

        var generators = [letGenerator(), numGenerator(), symbGenerator(), caseGenerator()];

        var chance = Math.floor(Math.random() * generators.length);

        password = password + generators[chance];
    }
    password = password + letGenerator();
    password = password + symbGenerator();
    password = password + numGenerator();
    password = password + caseGenerator();
    return password;
}


console.log(generatePassword(20));

//
//var alphaKey = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?+1234567890";
//
//
//function generator(length) {
//
//    var letterString = "";
//
//    for (i = 0; i < length; i++) {
//        var letChance = Math.floor(Math.random() * alphaKey.length);
//        var input = alphaKey[letChance];
//
//        letterString = letterString += input;
//    }
//    return letterString;
//}
//
//console.log(generator(7));