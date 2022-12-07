var i = 1;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
//   i++;
// }

console.warn(`Modifica exemplul astfel incat bucla sa
numere de la 1 la 67.`);
// while (i <= 67) {
//   console.log(i);
//   i++;
// }

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
`);
// while (i < 67) {
//   console.log(i);
//   i++;
// }

console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
`);
// while (i < 67) {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
//   i++;
// }

console.warn(`Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
`);
// while (i <= 32) {
//   if (i % 2 !== 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

console.warn(`Folosind metoda prompt de doua ori cere utilizatorului un numar si
o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.
`);
var userInputNumber = prompt('Introdu un numar');
var userInputLimit = prompt('Introdu limita superioara');
var multiplu = 0;
while (i <= userInputLimit) {
  multiplu = userInputNumber * i;
  if (multiplu > userInputLimit) {
    break;
  }
  console.log(multiplu);
  i++;
}
