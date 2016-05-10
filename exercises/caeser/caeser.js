var ask = require('readline-sync');
var input = ask.question('What phrase would you like to encrypt? ').toUpperCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));

function ceasarShift(input, shift) {
    var shiftedString = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (i = 0; i < input.length; i++) {
        var inputLetter = input[i];
        var alphabetIndex = alphabet.indexOf(inputLetter);
        if (alphabetIndex === -1) {
            shiftedString += inputLetter;
        } else {
            var alphaShift = (alphabetIndex + shift) % 26;
            shiftedString += alphabet[alphaShift];
            var final = shiftedString.toLowerCase();
        }


    }
    console.log(final);
}


ceasarShift(input, shift);