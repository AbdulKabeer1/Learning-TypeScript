"use strict";
//Store a person’s name in a variable, and then print that person’s name
// in lowercase, uppercase, and titlecase.
let PersonName = "Johnny Bravo";
console.log("LowerCase:", PersonName.toLowerCase());
console.log("UpperCase:", PersonName.toUpperCase());
function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
console.log("TitleCase:", toTitleCase(PersonName));