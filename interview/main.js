//string

// find word in string with most letters

// return length of that string.


function wordCounter(string) {

    var array = string.split(" ");
    var longestString = 0;

    for (i = 0; i < array.length; i++) {
        var stringSize = array[i].length;

        if (stringSize > longestString) {
            longestString = stringSize;
        }
    }
    return longestString;
}

console.log(wordCounter("The fox jumped over the dog."));