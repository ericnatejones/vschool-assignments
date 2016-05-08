var
    goombaTotal = document.getElementById("goombaTotalPrice"),
    bombOmbTotal = document.getElementById("bombOmbTotalPrice").value,
    cheepCheepTotal = document.getElementById("cheepCheepTotalPrice").value,
    costBro = document.getElementById("costBro").value,
    goombaButton = document.getElementById("buttonGoomba"),
    bombOmbButton = document.getElementById("buttonBombOmb"),
    cheepCheepButton = document.getElementById("buttonCheepCheep"),
    totalButton = document.getElementById("totalButton");

goombaButton.onclick = function () {
    var inputOne = document.getElementById("goombasCaught").value;
    document.getElementById("goombaTotalPrice").innerHTML = ("Total Price : " + (inputOne * 5));

};

bombOmbButton.onclick = function () {
    var inputOne = document.getElementById("bombOmbsCaught").value;
    document.getElementById("bombOmbTotalPrice").innerHTML = ("Total Price : " + (inputOne * 7));

};

cheepCheepButton.onclick = function () {
    var inputOne = document.getElementById("cheepCheepsCaught").value;
    document.getElementById("cheepCheepTotalPrice").innerHTML = ("Total Price : " + (inputOne * 11));

};

totalButton.onclick = function () {
    var goomba = (document.getElementById("goombasCaught").value) * 5;
    var bombOmb = (document.getElementById("bombOmbsCaught").value) * 7;
    var cheepCheep = (document.getElementById("cheepCheepsCaught").value) * 11;
    var inputOne = (+goomba + +bombOmb + +cheepCheep)
    document.getElementById("costBro").innerHTML = ("Total Price : " + inputOne);
};