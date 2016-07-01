function fractionizer(decimal) {

    var finalAnswer = "";

    var stringNumber = decimal.toString();
    
    if (stringNumber.indexOf(".") < 0) {
        finalAnswer = stringNumber;
    } else {

    var array = stringNumber.split(".");

    if (array[0] > 0) {
        finalAnswer = finalAnswer + array[0] + " ";
    }

    var length = array[1].length;
    var multiplier = Math.pow(10, length);
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };

    gcd = gcd(array[1], multiplier);

    finalAnswer = finalAnswer + array[1] / gcd;
    finalAnswer = finalAnswer + "/" + multiplier / gcd;
    }

    return finalAnswer;
}


console.log(fractionizer(.5));
console.log(fractionizer(.25));
console.log(fractionizer(.33));
console.log(fractionizer(13.5));
console.log(fractionizer(5));
console.log(fractionizer(1.000));
