// Write a regex fccRegex to match "freeCodeCamp", no matter its case. 
// Your regex should not match any abbreviations or variations with spaces.

let myString = "FreeCodeCamp";
let fccRegex = /fREecODeCAmp/i;
let result = fccRegex.test(myString);
