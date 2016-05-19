function array123(array) {

    var string = array.join("");
    return string.indexOf("123") !== -1;
}

var arrayT = [1, 1, 5, 4, 3, 6, 4, 1, 2, 3, 5];
var arrayF = [1, 1, 5, 4, 3, 6, 4, 3, 2, 1, 5];

console.log(array123(arrayT));