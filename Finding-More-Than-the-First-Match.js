//  Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /tWINkle|TWinKLe/gi; 
let result = twinkleStar.match(starRegex); 
