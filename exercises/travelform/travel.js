var submitButton = document.getElementById("submit");

submitButton.onclick = function () {

    var diet = document.myTravelForm.diet;
    var dietString = "";

    console.log(diet);
    for (x = 0; x < diet.length; x++) {
        if (diet[x].checked) {
            dietString += " " + diet[x].value + ",";
        }
    }

    window.alert(
        "First Name: " + document.myTravelForm.firstName.value +
        "\nLast Name: " + document.myTravelForm.lastName.value +
        "\nAge: " + document.myTravelForm.ageValue.value +
        "\nGender: " + document.myTravelForm.gender.value +
        "\nTraveling to: " + document.myTravelForm.locale.value +
        "\nDiet Preferences: " + dietString);
};