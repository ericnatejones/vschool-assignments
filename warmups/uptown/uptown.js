var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin", "whilen", "livin", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Got", "kiss", "myself", "Im", "so", "pretty"];


function firstFunction() {
    return lyrics.join(" ");
}

function secondFunction() {
    lyrics.reverse();
    return lyrics.join(" ");
}

function thirdFunction() {
    var everyOther = "";
    for (x = 0; x < lyrics.length; x++) {
    everyOther +=(" " + lyrics[x]);
     var splitString = everyOther.split(" ");
    splitString.reverse();
        
      
    }
//    splitString = splitString.reverse();
    return splitString.join(" ");
}

function fourthFunction () {
    
}


//console.log(firstFunction());
//console.log(secondFunction());
console.log(thirdFunction());