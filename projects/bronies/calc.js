var Expo = require("./expo");
var exponetiate = new Expo();
exponetiate.answer;

function Expotize(x, y) {
    this.equation = Math.pow(x, y);
    this.answer = function () {
        return this.equation;
    }
};

module.exports = Expotize;