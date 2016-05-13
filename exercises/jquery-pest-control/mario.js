var
    goombaTotal = $("#goombaTotalPrice"),
    bombOmbTotal = $("#bombOmbTotalPrice"),
    cheepCheepTotal = $("#cheepCheepTotalPrice"),
    costBro = $("#costBro"),
    goombaButton = $("#buttonGoomba"),
    bombOmbButton = $("#buttonBombOmb"),
    cheepCheepButton = $("#buttonCheepCheep"),
    totalButton = $("#totalButton"),
    goombasCaught = $("#goombasCaught"),
    bombOmbsCaught = $("#bombOmbsCaught"),
    cheepCheepsCaught = $("#cheepCheepsCaught");

function calculateTotal() {

    var goomba = goombasCaught.val() * 5;
    var bombOmb = bombOmbsCaught.val() * 7;
    var cheepCheep = cheepCheepsCaught.val() * 11;
    var inputtwo = (goomba += bombOmb += cheepCheep);
    costBro.html("Total Price : " + inputtwo);
}

goombasCaught.change(function () {
    var inputOne = goombasCaught.val();
    goombaTotal.html("Total Price : " + (inputOne * 5));
    calculateTotal();

});

bombOmbsCaught.change(function () {
    var inputOne = bombOmbsCaught.val();
    bombOmbTotal.html("Total Price : " + (inputOne * 7));
    calculateTotal();

});

cheepCheepsCaught.change(function () {
    var inputOne = cheepCheepsCaught.val();
    cheepCheepTotal.html("Total Price : " + (inputOne * 11));
    calculateTotal();

});