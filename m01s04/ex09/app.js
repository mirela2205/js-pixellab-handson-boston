var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// do {
//   i++;

//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// } while (i < 100);

console.warn(`Modifica exemplul astfel incat bucla sa
numere de la 1 la 52`);
// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 51.`);
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

console.warn(
  `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)`,
);

// do {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }

//   i++;
// } while (i < 52);

console.warn(
  `Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.`,
);

// do {
//   if (i < 8 || i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// } while (i <= 32);

console.warn(`Folosind metoda prompt de trei ori cere utilizatorului un numar,
o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara
si limita superioara introduse.
`);

var userInputNo = prompt('Introdu un numar');
var userInputInf = prompt('Introdu o limita inferioara');
var userInputSup = prompt('Introdu o limita superioara');
var multiplu = 0;

do {
  multiplu = userInputNo * i;
  if (multiplu > userInputInf && multiplu < userInputSup) {
    console.log(multiplu);
  }
  i++;
} while (i < userInputSup);
