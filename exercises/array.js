var alphabet = "abcdefghijklmnopqrstuvwxyz";

var alphaArray = alphabet.split("");
var newAlphabet = [];
for (i = -1; i < alphaArray.length; i += 2) {
    newAlphabet.push(alphaArray[i]);
}
var newAlphaString = newAlphabet.join("");
console.log(newAlphaString);