
let state = 'Florida';
let taxPercent = 0;

if (state !== 'Florida') {
  taxPercent = 0;
} else if (state === 'Florida') {
    taxPercent = 7;
  console.log(taxPercent);
}

//Truthy and Falsy

/* falsy
   false
   0
   "" or '' (empty Strings)
   null
   undefined
   NaN
*/

/*
  Truthy
  Evrething not Falsy
  true
  0.5
  "0"
*/

let score = 1000;

if (score >= 1000) {
  score = score + 100;
}

console.log(score);
