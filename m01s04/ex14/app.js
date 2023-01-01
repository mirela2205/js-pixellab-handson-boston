var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};
const personAge = new Date().getFullYear() - person.birthYear;
console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal.`,
);

var animals = person.pets;
animals.forEach(function (animal) {
  console.log(animal.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor.
`);
var sumAge = 0;
for (var i = 0; i < animals.length; i++) {
  sumAge += animals[i].age;
}
console.log(sumAge);

console.warn(`Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);

animals.forEach(function (animal) {
  const message = `${animal.name} este ${animal.species} si are ${animal.age} ani.`;
  console.log(message);
});

console.warn(`Folosind o bucla for afiseaza cate una pe linie propozitiile:
“Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
let difference = 0;
for (let i = 0; i < animals.length; i++) {
  difference = Math.abs(personAge - animals[i].age);
  const message = `Intre ${person.firstName} si ${animals[i].name} este o diferenta de ${difference} ani.`;
  console.log(message);
}

console.warn(`Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii:
“Animalul meu se numeste xxxx.”.
`);
for (var i = animals.length - 1; i >= 0; i--) {
  console.log(`Animalul meu se numeste ${animals[i].name}`);
}

console.warn(`Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
“xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
`);
var x = 0;
var array = [];
for (let i = 0; i < person.pets.length; i++) {
  x = person.pets[i].age;
  array.push(x);
}
var maxim = Math.max(...array);
console.log(array);
console.log(maxim);
console.log(array.indexOf(maxim));
console.log(
  `${
    animals[array.indexOf(maxim)].name
  } este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${Math.abs(
    personAge - person.pets[array.indexOf(maxim)].age,
  )} de ani.`,
);
// aici pixeltab nu se face verde desi in consola apare acelasi text

console.warn(`Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);
var message2 = 'Am ';
person.pets.forEach(function (pet, index, pets) {
  var punctuation = ', ';
  if (index === pets.length - 2) {
    punctuation = ' si ';
  }
  if (index === pets.length - 1) {
    punctuation = '.';
  }
  message2 += `${pet.species}${punctuation}`;
});
console.log(message2);
