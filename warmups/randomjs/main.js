function alphabetize(string) {

    string = string.toLowerCase();

    var array = string.split("");
    array = array.sort();
    var newString = array.join("");

    return newString;
}

console.log(alphabetize("heElLo"));

function longFinder(string) {

    var longCount = 0;
    var longest = [];
    var array = string.split(" ");

    for (i = 0; i < array.length; i++) {
        if (array[i].length > longCount) {
            longCount = array[i].length;
            longest.splice(0, 1, array[i]);
        }
    }
    return longest;
}

console.log(longFinder("The world is dying mister Harimoto. Indeed, it is."));

function vowelCounter(string) {

    var vowels = "aeiouy";
    var vowelCount = 0;

    for (i = 0; i < string.length; i++) {

        if (vowels.indexOf(string[i]) > -1) {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(vowelCounter("Hello my name is Jack"));

