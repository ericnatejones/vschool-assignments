 var frequency = {},
     stripped = "",
     sorted = [];

 function findFrequency(string) {

     for (i = 0; i < string.length; i++) {

         var character = string.charAt(i);

         if (frequency[character]) {
             frequency[character]++;
         } else {
             frequency[character] = 1;
             stripped += character;
         }
     }
 }

 function sort(string) {

     findFrequency(string);

     for (var letter in frequency)
         sorted.push([letter, frequency[letter]])
     sorted.sort(function (a, b) {
         return b[1] - a[1]
     })
 }

 function print(string) {

     sort(string);

     console.log(sorted);
     console.log(stripped);
 }

 print("slimy smelly solution");