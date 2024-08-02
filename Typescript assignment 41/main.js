"use strict";
//ASSIGNMENT # 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians_names = ["Bilal", "Shahzaib", "Madhia",];
show_magicians(magicians_names);
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
