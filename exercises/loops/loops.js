var readline = require("readline-sync");
//var response = readline.question("Enter a number: ");


function firstFunction(userInput) {
    for (i = 0; i < userInput.length; i++) {
        console.log(userInput[i]);
    }

}

firstFunction(response = readline.question("What's your name? "));

function secondFunction(string) {
    while (true) {
        var response = readline.question("Type a single character: ");
        for (i = 0; i < string.length; i++) {
        if (response === string[i]) {
            return string.indexOf(response);
        }
    }
        console.log("Character not found.");
       
    }
}

console.log(secondFunction("Hello Bob."));

function thirdFunction() {

    var response = readline.question("Enter a number: ");

    while (response !== "42") {

        console.log(response);
        response = readline.question("Enter a number: ");
    }
}

thirdFunction();

function fourthFunction() {
    var myArray = [];

    while (myArray.length < 10) {
        var response = readline.question("Enter another number: ");
        myArray.push(parseInt(response));
    }
    console.log(Math.min.apply(Math, myArray));
}

fourthFunction();
