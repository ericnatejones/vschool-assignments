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

    var goomba = goombasCaught.val() * 5,
        bombOmb = bombOmbsCaught.val() * 7,
        cheepCheep = cheepCheepsCaught.val() * 11,
        inputtwo = (goomba += bombOmb += cheepCheep),
        audio = new Audio('Mario-coin-sound.mp3');

    audio.play();

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
var toggle = true;
$("#pipe").click(function () {
    if (toggle) {
        $("body").css("background-image", "url(8-bit-dark-mario-mushroom-nintendo.jpg)");
        $("#my_audio").get(0).play();
        $(".entireForm").css("background-color", "black");
        toggle = false;
    } else {
        $("body").css("background-image", "url(super_mario_game-wallpaper-1366x768.jpg)");
        $("#my_audio").get(0).play();
        $(".entireForm").css("background-color", "#0dd6ff");
        toggle = true;

    }
});



JS:
    $(document).ready(function () {

    });