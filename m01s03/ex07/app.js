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
console.log((new Date().getFullYear() - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);

difference = (
  new Date().getFullYear() -
  person.birthYear -
  person.pets[0].age
).toString();

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
