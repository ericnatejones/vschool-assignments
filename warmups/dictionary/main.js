var ask = require('readline-sync'),
    dictionaryRunning = true,
    dictionary = [];

var NewWord = function (word, def) {

    this.word = word;
    this.definition = def;
};

function input() {

    var newWord = ask.question("\nNew word?\n"),
        newDef = ask.question("\nDefinition?\n"),
        entry = new NewWord(newWord, newDef);

    dictionary.push(entry);
}

function search() {
    
    var searchTerm = (ask.question("\nType the word you'd like to look up: \n")).toLowerCase(),
        found = false;
    
    for (i = 0; i < dictionary.length; i++) {
        if ((dictionary[i].word).toLowerCase() === searchTerm) {
            console.log("\nDefinition: " + dictionary[i].definition);
            found = true;
        }
    }
    
    if (found === false) {
        console.log("\n Not found.");
    } else {
        found = false;
    }
}

while (dictionaryRunning) {

    var whatToDo = (ask.question("\nType 'add' to add a word to the dictionary, 'search' to search the dictionary, or 'q' to quit.\n")).toLowerCase();

    if (whatToDo === "q") {
        dictionaryRunning = false;
        return;
    } else if (whatToDo === "add") {
        input();
    } else if (whatToDo === "search") {
        search();
    } else {
        console.log("Sorry, I didn't catch that...");
    }
}