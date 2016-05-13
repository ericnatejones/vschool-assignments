var
    goombaTotal = $("#goombaTotalPrice"),
    bombOmbTotal = $("#bombOmbTotalPrice").val(),
    cheepCheepTotal = $("#cheepCheepTotalPrice").val(),
    costBro = $("#costBro").val(),
    goombaButton = $("#buttonGoomba"),
    bombOmbButton = $("#buttonBombOmb"),
    cheepCheepButton = $("#buttonCheepCheep"),
    totalButton = $("#totalButton"),
    goombasCaught = $("#goombasCaught"),
    bombOmbsCaught = $("#bombOmbsCaught"),
    cheepCheepsCaught = $("#cheepCheepsCaught");

function calculateTotal() {

    var goomba = ($("#goombasCaught").val()) * 5;
    var bombOmb = ($("#bombOmbsCaught").val()) * 7;
    var cheepCheep = ($("#cheepCheepsCaught").val()) * 11;
    var inputtwo = (+goomba + +bombOmb + +cheepCheep);
    $("#costBro").innerHTML = ("Total Price : " + inputtwo);
}

goombasCaught.onchange = function () {
    var inputOne = $("#goombasCaught").val();
    $("#goombaTotalPrice").innerHTML = ("Total Price : " + (inputOne * 5));
    calculateTotal();

};

bombOmbsCaught.onchange = function () {
    var inputOne = $("#bombOmbsCaught").val();
    $("#bombOmbTotalPrice").innerHTML = ("Total Price : " + (inputOne * 7));
    calculateTotal();

};

cheepCheepsCaught.onchange = function () {
    var inputOne = $("#cheepCheepsCaught").val();
    $("#cheepCheepTotalPrice").innerHTML = ("Total Price : " + (inputOne * 11));
    calculateTotal();

};