function formatMoney(number) {

    if (!isNaN(number)) {

        var array = number.split("");

        if (array.length > 1) {
            array.splice(array.length - 2, 0, ".");
            var reversed = array.reverse();

            for (i = 6; i < reversed.length; i += 4) {
                reversed.splice(i, 0, ",");
            }

            reversed.splice(reversed.length, 0, "$");

            var formattedString = reversed.reverse().join("");
            return formattedString;
        } else {

            array.splice(0, 0, "$.0");

            var formattedString = array.join("");
            return formattedString;
        }
    } else {
        return "Is not a number.";
    }
}

console.log(formatMoney("12345678900000"));
console.log(formatMoney("1"));
console.log(formatMoney("23"));
console.log(formatMoney("124"));
console.log(formatMoney("1234"));
console.log(formatMoney("34helo"));