Array.prototype.myFilter = function (callback) {
    var array = this;
    var newArray = [];

    for (i = 0; i < array.length; i++) {

        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

var numericArray = [8, 3, 4, 32, 42, 9, 3, 5, 42, 2, 52, 3];

var noLargeNumbers = numericArray.myFilter(function (element) {
    return element <= 5;
});

console.log(noLargeNumbers);