console.warn(`Folosind un bloc if si keywordul continue, afiseaza mesajul "Acest numar este multiplu de 7." atunci cand este cazul.
`);
for (var i = 0; i <= 100; i++) {
  if (i % 7 !== 0) {
    continue;
  }
  console.log(i);
  console.log('Acest numar este multiplu de 7');
}

console.warn(`Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti
 multipli si afiseaza mesajul: “Acest numar este multiplu de x.”
`);
var multiplu = 0;
var userInput = prompt('Introdu un numar');
for (var i = 0; i <= 100; i++) {
  if (userInput === '0') {
    console.log('Multiplu de 0');
    break;
  }
  multiplu = userInput * i;
  console.log(multiplu);
  console.log(`Acest numar este multiplu de ${userInput}`);
}

console.warn(
  `Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli
  si afiseaza mesajul: “Acest numar este multiplu de x.” Afla multiplii pentru acest numar intre 1 si 1000. `,
);
for (var i = 0; i <= 1000; i++) {
  if (userInput === '0') {
    console.log('Multiplu de 0');
    break;
  }
  multiplu = userInput * i;
  if (multiplu >= 1 && multiplu <= 1000) {
    console.log(multiplu);
    console.log(`Acest numar este multiplu de ${userInput}`);
  }
}

console.warn(
  `Folosind inca o metoda prompt, cere utilizatorului si
  limita superioara pana la care sa numere bucla si sa afiseze multipli. `,
);
var userInputlimit = prompt('Introdu limita superioara');
for (var i = 0; i <= userInputlimit; i++) {
  if (userInput === '0') {
    console.log('Multiplu de 0');
    break;
  }
  multiplu = userInput * i;
  if (multiplu <= userInputlimit) {
    console.log(multiplu);
    console.log(`Acest numar este multiplu de ${userInput}`);
  }
}
