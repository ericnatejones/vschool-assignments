var ask = require('readline-sync');
console.log("\nHello! My name is Betty. Help me get to know you!\n");
var firstName = ask.question("Tell me your name. ");
console.log((firstName.toUpperCase()) + "? Sexy. Wait. You're married, aren't you?\n");
var maritalStatus = ask.question("Yes or no?\n");
while ((maritalStatus != "yes") && (maritalStatus != "no")) {
    var maritalStatus = ask.question("\nSorry, I didn't catch that. You do know what a yes or no question is, right? So are you married or what?\n");
}
if (maritalStatus === "no") {
    console.log("\nOooo, it's my lucky day.\n");
}
if (maritalStatus === "yes") {
    console.log("\nUgh. You know what they say. The good ones are always taken.\n");
}
var age = ask.question("So how old are you, " + firstName + "? \n");
var number = parseInt(age);
while (isNaN(number)) {
    var age = ask.question("Okay sweetheart, let's try again, this time using integers. You know, 12345?\n");
    var number = parseInt(age);
}
console.log("\nOnly in the " + age.length + " digits, huh? Noob.\n");
var hobby = ask.question("I imagine you do things for fun. Isn't that what most humans do? Tell me what you like to do for fun so I can live vicariously through you.\n");
while (hobby.length < 20) {
    var hobby = ask.question("\nNot much of a talker, are you? Tell me a longer story than that.\n");
}

var story = (hobby.length / 2);
var halfStory = hobby.slice(story, hobby.length);


console.log("\nSo the last half of your story is \"" + halfStory + "?\" Hee hee hee. Don't tease me. I don't have a body like you, so I have to entertain myself in other ways like tell you the second half of things you say.\n");
console.log("For example, I like to take what you said, split it in half, then stick it on the end of the original story. LIKE THIS!\n" + hobby.concat(halfStory));

var game = ask.question("\nOkay, okay - one last game. Give me a number, and I'll start reading your story from that number's place!\n");

var newNumber = parseInt(game);

while (isNaN(newNumber) || newNumber > hobby.length) {
    var game = ask.question("Okay sweetheart, let's try again, this time using integers. You know, 1,2,3? And let's not make it bigger than your story.\n");
    var newNumber = parseInt(game);
}

console.log("\nHa ha! Here we go: " + hobby.substr(newNumber,hobby.length));


console.log("\nIt was fun playing with you, " + firstName + ". Until we meet again!\n");