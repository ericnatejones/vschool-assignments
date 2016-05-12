function stringSplosion(myString) {

    var myArray = myString.split("");
    var myNewerString = [];
    var myNewString = [];

    function myArrayerier() {

        myArray.forEach(function (value) {

            myNewString = [myNewString + value];
            myNewerString = myNewerString.concat(myNewString);
        });
    }

    myArrayerier();

    var splosion = myNewerString.join("");

    console.log(splosion);
}

stringSplosion("Howdy partner.");