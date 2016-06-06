function has22(input) {
    for (i = 0; i < input.length; i++) {
        if (input[i] === 2 && input[i + 1] === 2) {
            return true;
        }
    }
    return false;
}

console.log(has22([1, 2, 3, 3, 5]));
console.log(has22([1, 2, 2, 4, 5]));
console.log(has22([1, 2, 3, 4, 5]));
console.log(has22([1, 2, 2, 2, 5]));
console.log(has22([1, 2]));
console.log(has22([1
                   
