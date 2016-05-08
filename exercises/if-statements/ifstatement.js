function lesser(x, y) {
    return Math.min(x, y);
}


function monkeyTrouble(asmile, bsmile) {
    return ((asmile && bsmile) || (!asmile && !bsmile)) ? true : false;
}

function greeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    console.log(currentHour);
    if ((currentHour > 0) && (currentHour < 12)) {
        return "Good morning!";
    } else if ((currentHour >= 12) && (currentHour < 20)) {
        return "Good afternoon!";
    } else {
        return "Good night!";
    }
}

console.log(greeting());
console.log(lesser(27, 9));
console.log(monkeyTrouble(true, false));