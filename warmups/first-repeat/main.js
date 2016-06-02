function repeater(string) {

    if (string.length > 1) {

        for (var i = 0; i < string.length - 1; i++) {

            if (string.charAt(i) !== string.charAt(i + 1)) {
                if (i === 0) {
                    return string[0];
                } else {

                    return string[i + 1];
                }
            }
        }
        return "No non-repeating characters.";
    } else if (string.length === 1) {
        return string[0];
    } else {
        return "No characters entered.";

    }
}

console.log(repeater("kkkkfffja;lkjdddddk"));
console.log(repeater("kjjjjjjfkjlkj"));
console.log(repeater("l"));
console.log(repeater(""));
console.log(repeater("lk"));