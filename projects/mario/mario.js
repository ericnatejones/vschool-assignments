var
    goombaTotal = document.getElementById("goombaTotalPrice"),
    bombOmbTotal = document.getElementById("bombOmbTotalPrice").value,
    cheepCheepTotal = document.getElementById("cheepCheepTotalPrice").value,
    costBro = document.getElementById("costBro").value,
    goombaButton = document.getElementById("buttonGoomba"),
    bombOmbButton = document.getElementById("buttonBombOmb"),
    cheepCheepButton = document.getElementById("buttonCheepCheep"),
    totalButton = document.getElementById("totalButton"),
    goombasCaught = document.getElementById("goombasCaught"),
    bombOmbsCaught = document.getElementById("bombOmbsCaught"),
    cheepCheepsCaught = document.getElementById("cheepCheepsCaught");

function calculateTotal () {
    
    var goomba = (document.getElementById("goombasCaught").value) * 5;
    var bombOmb = (document.getElementById("bombOmbsCaught").value) * 7;
    var cheepCheep = (document.getElementById("cheepCheepsCaught").value) * 11;
    var inputtwo = (+goomba + +bombOmb + +cheepCheep);
    document.getElementById("costBro").innerHTML = ("Total Price : " + inputtwo);
}

goombasCaught.onchange = function () {
    var inputOne = document.getElementById("goombasCaught").value;
    document.getElementById("goombaTotalPrice").innerHTML = ("Total Price : " + (inputOne * 5));
    calculateTotal();

};

bombOmbsCaught.onchange = function () {
    var inputOne = document.getElementById("bombOmbsCaught").value;
    document.getElementById("bombOmbTotalPrice").innerHTML = ("Total Price : " + (inputOne * 7));
    calculateTotal();

};

cheepCheepsCaught.onchange = function () {
    var inputOne = document.getElementById("cheepCheepsCaught").value;
    document.getElementById("cheepCheepTotalPrice").innerHTML = ("Total Price : " + (inputOne * 11));
    calculateTotal();

};