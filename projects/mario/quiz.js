function first() {
    return "I'm the first function";
}

function second() {
    return first();
    console.log("I'm the second function");
}

function third() {
    console.log(second());
    console.log("I'm the third function");
}

third();