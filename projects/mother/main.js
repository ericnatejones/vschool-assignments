var button = $("#add"),
    list = $("#list"),
    input = $("#input");

input.focus();

function addGrocery() {

    if (input.val() !== "") {
        list.append('<li class="grocery"><input type="button" class="deleteButton" value="X"/>   ' + input.val() + '  </li>');

        $("#input").val("");

    } else {
        window.alert("Mom. Don't be a noob.");
    }
    input.focus();
}

$(document).on("click", "#add", addGrocery);

input.keyup(function () {

    if (event.keyCode === 13) {
        addGrocery();
    }
});

$(document).on("click", ".deleteButton", function () {
    $(this).parent().remove();
});