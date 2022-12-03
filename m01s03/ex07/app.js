var person = {
  firstName: 'Aurora',
  lastName: 'Boreala',
  email: 'auroraboreala@yahoo.com',
  birthYear: 1988,
  pets: [
    {
      name: 'Beijing',
      age: 2,
      species: 'cat',
    },
    {
      name: 'Singapore',
      age: 3,
      species: 'dog',
    },
    {
      name: 'Manila',
      age: 4,
      species: 'monkey',
    },
  ],
  zipCode: '123456',
};

var difference = '';
var petName = person.pets[0].name;
var year = new Date().getFullYear();
var element1 = document.getElementById('prop01');
var element2 = document.getElementById('prop02');
var element3 = document.getElementById('prop03');
var element4 = document.getElementById('prop04');

console.warn(`Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.
`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.
`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(`Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
`);
console.log((year - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);

difference = (year - person.birthYear - person.pets[0].age).toString();

console.log(difference);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn(`Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
`);
console.log(petName);

console.warn(
  `Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`,
);
console.log(
  `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`,
);
element1.innerText = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;

console.warn(`Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
`);
console.log(person.pets[0].age - person.pets[2].age);
element2.innerText = person.pets[0].age - person.pets[2].age;

console.warn(`Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
`);
console.log(
  `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`,
);
element3.innerText = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. `,
);
console.log(
  `Animalele mele s-au nascut in ${year - person.pets[0].age}, ${
    year - person.pets[1].age
  }, respectiv ${year - person.pets[2].age}.`,
);
element4.innerText = `Animalele mele s-au nascut in ${
  year - person.pets[0].age
}, ${year - person.pets[1].age}, respectiv ${year - person.pets[2].age}.`;
