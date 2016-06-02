function formatter(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    var array = string.split("");
    return array;
}

function stringer(array) {
    var string = array.join("");
    return string;
}

function reverseStringer(array) {
    var reversedString = array.reverse().join("");
    return reversedString;
}

function returnMessage(original, reversed) {
    if (original === reversed) {
        return "This is a palindrome";
    } else {
        return "This is not a palindrome";
    }
}

function palindromeFinder(string) {

    return returnMessage(stringer(formatter(string)), reverseStringer(formatter(string)));
}

console.log(palindromeFinder("Race Car!"));