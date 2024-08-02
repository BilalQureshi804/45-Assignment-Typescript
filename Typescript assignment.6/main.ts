//Assignment 6 
//Stripping Names: Store a person's name and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character conbination, "/t" and "/n", at least once.
//Print the name once, so the whitespace around the name is displayed. Then print the name after the white spaces.

let Namewithwhitespaces:string="\t\n Bilal Qureshi \t\n";
console.log(Namewithwhitespaces);
let Namewithoutwhaitespaces=Namewithwhitespaces.trim();
console.log(Namewithoutwhaitespaces);