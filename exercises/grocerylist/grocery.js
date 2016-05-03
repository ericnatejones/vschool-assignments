var shopper = {
    name: "Jack",
    age: 30,
    member: true,
    groceryCart: ["Beef", "Chicken", "Tortillas", "Avacados"],
    hungry: function () {
        var status;
        if (shopper.member === true) {
            status = "a Shopper-Pal member.";
        } else {
            status = "not a Shopper-Pal member.";
        }
        console.log(shopper.name, "is", shopper.age, "years old and", status, "Judging by his grocery cart, he's hungry for", shopper.groceryCart[0] + ".");
    }
};

shopper.hungry();