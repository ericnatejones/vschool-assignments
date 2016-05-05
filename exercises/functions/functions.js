function firstFunction(x, y) {
    return (x + y);
}

var secondFunction = function (x, y, z) {
    return Math.max(x, y, z);
};

function thirdFunction(x) {
    if (x % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

var fourthFunction = function (str) {
//    var strLength = str.length;
    if (str.length <= 3) {
        return (str + str);
    } else {
        return str.slice(0, (str.length / 2));
    }
};

console.log(firstFunction(1,2));

console.log(secondFunction(10, 33, 27));

console.log(thirdFunction(9));

console.log(fourthFunction("Blargg"));

