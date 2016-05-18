function fixTeen(n) {

    if (((n > 12) && (n < 15)) || ((n > 16) && (n < 20)) || (isNaN(n))) {
        return 0;
    } else {
        return n;
    }
}

function addValues(a, b, c) {

    var valueA = fixTeen(a),
        valueB = fixTeen(b),
        valueC = fixTeen(c);
    if ((isNaN(a)) || (isNaN(b)) || isNaN(c)) {
        console.log("Non-numeric values entered.");
        console.log(valueA + valueB + valueC);
    } else {
        console.log(valueA + valueB + valueC);

    }
}

addValues(2, "f", 14);