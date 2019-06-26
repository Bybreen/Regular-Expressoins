// Write a greedy regex that finds one or more criminals within a group of other people. 
// A criminal is represented by the capital letter C.

let crowd = "P1P2Z4R1R2R3D5D6D7CCCCC7P8P9P";

let reCriminals = /C+/g;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
