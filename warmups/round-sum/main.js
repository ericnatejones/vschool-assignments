function roundSum(x, y, z) {
    var a = round10(x),
        b = round10(y),
        c = round10(z);

    return a + b + c;
}

function round10(x) {
    
    return Math.round(x/10) * 10;
}

console.log(roundSum(16, 117, 18));
console.log(roundSum(12, 13, 14));
console.log(roundSum(0, 24, -6));
