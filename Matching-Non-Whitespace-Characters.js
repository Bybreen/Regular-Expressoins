// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let sample = "White space is important for separating words.";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
