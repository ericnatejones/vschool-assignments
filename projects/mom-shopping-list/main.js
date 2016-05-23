var button = $("#add"),
    list = $("#list"),
    input = $("#input");

input.focus();

$(document).on("click", "#add", function (event) {

    var string = input.val();
    if (string) {
        event.preventDefault();
        list.append('<li class="grocery"><input type="button" class="deleteButton" value="X"/>   ' + string + '  </li>');
    }
    document.getElementById("form").reset();
});

$(document).on("click", ".deleteButton", function () {
    $(this).parent().remove();
});