//function removeVowels(myString) {
//    var vowels = ["a", "e", "i", "o", "u"],
//        newString = {};
//
//    for (i = 0; i<myString.length; i++) {
//        
//    }
//    
//    
//    
//        var letterIndex = vowels.indexOf(myString[i]);
//        if (letterIndex < 0) {
//            newString += myString[i];
//        }
//
//    });
//   
//    console.log(finalString);
//}
//
//
//removeVowels("Hippopotamus");


function Car(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.describeSelf = function () {
        console.log("I'm a " + this.year, this.make, this.model + "!");
    }
}

var honda = new Car(1985, "Honda", "Civic");
console.log(honda);
honda.describeSelf();

function User(fn, ln, em, ps){
    this.fn =fn,
        
}