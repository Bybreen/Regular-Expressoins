// Change the regex timRegex to match the word "Timber" only when it has four letter m's.

let timStr = "TImmmmmmmmmmber";
let timRegex = /tim{4}ber/i;
let result = timRegex.test(timStr);
