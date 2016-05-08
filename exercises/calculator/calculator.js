var addButton = document.getElementById("addButton"),
    subtractButton = document.getElementById("subtractButton"),
    multiplyButton = document.getElementById("multiplyButton");

document.getElementById("addButton").onclick = function () {
    var inputOne = document.getElementById("addOne").value;
    var inputTwo = document.getElementById("addTwo").value;

    document.getElementById("addThree").value = (+inputOne + +inputTwo);
    console.log(inputOne);
    console.log(inputTwo);
};

document.getElementById("subtractButton").onclick = function () {
    var inputOne = document.getElementById("subtractOne").value;
    var inputTwo = document.getElementById("subtractTwo").value;

    document.getElementById("subtractThree").value = (inputOne - inputTwo);
    console.log(inputOne);
    console.log(inputTwo);
};

document.getElementById("multiplyButton").onclick = function () {
    var inputOne = document.getElementById("multiplyOne").value;
    var inputTwo = document.getElementById("multiplyTwo").value;

    document.getElementById("multiplyThree").value = (inputOne * inputTwo);
    console.log(inputOne);
    console.log(inputTwo);
};