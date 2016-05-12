var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Ingrid", "Jill"];

function text(name) {

    console.log("\nYou sent a text to " + name + ".");
}

function call(name) {

    console.log("\nYou called " + name + ".");
}

function dontCall(name) {

    console.log("\nYou did not call " + name + ".");
}

function attemptCall(name, call, dontCall, text) {

    if (name.toUpperCase().indexOf("A") !== name.toUpperCase().lastIndexOf("A")) {

        console.log("\nTexting " + name + ".");
        setTimeout(text(name), 5000);

    } else if (name.length % 2 === 0) {

        console.log("\nCalling " + name + ".");
        setTimeout(call(name), 5000);

    } else {

        console.log("\nIngoring " + name + ".");
        setTimeout(dontCall, 5000);

    }
}

names.forEach(function (value) {

    setTimeout(attemptCall(value, call, dontCall, text), 1000);

});