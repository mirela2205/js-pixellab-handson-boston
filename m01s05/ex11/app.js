console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi.
Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.
`);

function calculateSurface(width, length, height) {
  var dimension = arguments.length;

  switch (dimension) {
    case 1:
      return width ** 2;
    case 2:
      return width * length;
    case 3:
      return width * height * 2 + length * height * 2 + width * length * 2;
    default:
      console.warn(`invalid parameters`);
  }
}

console.log(calculateSurface(3));

console.warn(`Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
`);

function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia:
“Animalul meu are petAge ani”
`);

const pet = {
  getName: function () {
    return 'Zuzu';
  },
  getSpecies: () => {
    return 'caine';
  },
  getAge: () => {
    return 5;
  },
};

console.log(
  `${pet.getName()} este ${pet['getSpecies']()} si are ${pet['getAge']()} ani.`,
);

function accessor(suffix) {
  const which = `get${suffix}`;
  return pet[which]();
}

console.log(
  `Am un ${accessor('Species')} pe nume ${accessor('Name')} care are ${accessor(
    'Age',
  )} ani.`,
);

const petAge = pet['getAge']();
console.log(`Animalul meu are ${petAge} ani.`);
