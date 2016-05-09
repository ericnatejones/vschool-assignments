function createEvenArray(highestNum) {
    var evenArray = [];
    for (i = 2; i <= highestNum; i += 2) {
        evenArray.push(i);

    }
    return evenArray;
}

var evens = createEvenArray(10);

function addOdds(evensOnlyArray) {
    var oddsOnly = [];
    var finalArray = [];
    for (i = 0; i < evensOnlyArray.length; i++) {
        oddsOnly.push(evensOnlyArray[i] + 1);
    }
    finalArray = evensOnlyArray.concat(oddsOnly);
    return finalArray;
}

var both = addOdds(evens);

function sortNums(numberArray) {
    numberArray.sort(function (a, b) {
        return a - b
    });

    return numberArray;
}

console.log(sortNums(both));