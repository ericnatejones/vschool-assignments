function luckySum(x, y, z) {

    var array = [x, y, z];
    var sum = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] !== 13) {
            sum = sum += array[i];
        } else {
            break;
        }
    }
    return sum;
}

console.log(luckySum(1, 2, 3));
console.log(luckySum(1, 13, 3));
console.log(luckySum(13, 12, 3));
console.log(luckySum(1, 12, 13));