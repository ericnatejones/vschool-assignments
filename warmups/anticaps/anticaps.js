function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function antiCaps(normalString) {
    var myNewArray = [];
    var myArray = normalString.split("");
    myArray.forEach(function (value) {
        if (isCaps(value)) {
            myNewArray.push(value.toLowerCase());
        } else {
            myNewArray.push(value.toUpperCase());
        }
    });
    var reversedString = myNewArray.join("");
    console.log(reversedString);
}

antiCaps("JaVaScRiPt Is AwEsOmE.");