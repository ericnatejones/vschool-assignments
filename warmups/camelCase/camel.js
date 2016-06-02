function camelCase(string) {

    string = string.toLowerCase();
    string = string.trim();
    string = string.replace(/-/g, " ");
    string = string.replace(/_/g, " ");
    array = string.split(" ");

    var newString = array[0].toString();

    for (i = 1; i < array.length; i++) {
        var firstLetter = array[i].slice(0, 1);
        newString = newString + firstLetter.toUpperCase() + array[i].slice(1, array[i].length);
    }

    console.log(newString);
}

camelCase("My name_is_J-c-M-c B and I am LiviNg in the S-L-C");