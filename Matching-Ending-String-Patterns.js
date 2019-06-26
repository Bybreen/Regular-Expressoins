// Use the anchor character ($) to match the string "caboose" at the end of the string caboose.

let caboose = "The last car on the train is caboose.";
let lastRegex = /Caboose$/;
let result = lastRegex.text(caboose);
