var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.
`);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(`In mod similar, afiseaza skillurile care NU incep cu j.
`);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (!skill.startsWith('j')) {
    console.log(skill);
  }
}

// se mai putea
// if (skill.startsWith('j') !== true)

console.warn(
  ` Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  // message = message +
  message += `${friend.name} ${friend.surname}${punctuation}`;
}
console.log(message);

console.warn(` Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
doar daca varsta este mai mare sau egala cu 30 de ani.
`);
var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;

  if (friendAge >= 30) {
    sumAge += friendAge;
  }
}
console.log(sumAge.toString());

var sumYears = 0;
var year = new Date().getFullYear();
console.warn(
  ` Folosind un for, afiseaza suma anilor de nastere a persoanelor. `,
);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  sumYears += year - friend.age;
}
console.log(sumYears.toString());

var difference = 0;
console.warn(`Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul
 friends doar daca aceasta este mai mare de 2 ani.
`);
for (var i = 0; i < person.friends.length; i++) {
  var frndAge = person.friends[i].age;
  difference = Math.abs(person.age - frndAge);

  if (difference > 2) {
    console.log(difference);
  }
}

console.warn(`
  Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ",
  doar daca varsta prietenului este impara.
`);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diff = Math.abs(person.age - friend.age);

  if (friend.age % 2 === 0) {
    continue;
  }

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}
console.log(message.trim());

console.warn(`
  Folosind proprietatea length a arrayului skills si o bucla for,
  afiseaza in ordine inversa elementele arrayului skills.
  Atentie, va trebui sa numeri invers, de la length la 0.
`);
for (var i = person.skills.length - 1; i >= 0; --i) {
  console.log(person.skills[i]);
}

console.warn(`Folosind obiectul person si un for, afiseaza in consola
skillurile pe care le are persoana
`);
for (var i = 0; i < person.skills.length; i++) {
  var skillsPerson = person.skills[i];
  console.log(skillsPerson);
}

console.warn(` In mod similar, afiseaza skillurile care incep cu c
`);
for (var i = 0; i < person.skills.length; i++) {
  var skillName = person.skills[i];

  // if (skillName.startsWith('c')) {
  //   console.log(skillName);
  // } SAU

  if (!skillName.startsWith('c')) {
    continue;
  }

  console.log(skillName);
}

var lengthFriends = person.friends.length;
var messageText = 'Numele de familie ale prietenilor mei sunt: ';
console.warn(` Folosind un for afiseaza propozitia:
"Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."
`);
for (var i = 0; i < lengthFriends; i++) {
  var lastName = person.friends[i].surname;
  var punctuation = ', ';

  if (i === lengthFriends - 1) {
    punctuation = '.';
  }

  messageText += `${lastName}${punctuation}`;
}
console.log(messageText);

var sumAgeFriends = 0;
console.warn(` Folosind un for, afiseaza numarul total de ani
pe care il au persoanele din arrayul friends
`);
for (var i = 0; i < lengthFriends; i++) {
  sumAgeFriends += person.friends[i].age;
}
console.log(sumAgeFriends.toString());

console.warn(` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);
for (var i = 0; i < person.friends.length; i++) {
  var frndAge = person.friends[i].age;
  difference = Math.abs(person.age - frndAge);

  console.log(difference);
}

var messageC = '';
console.warn(`Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
`);
for (var i = 0; i < lengthFriends; i++) {
  difference = Math.abs(person.age - person.friends[i].age);

  messageC += `Intre ${person.name} si ${person.friends[i].name} este o diferenta de ${difference} ani. `;
}
console.log(messageC.trim());

var phrase = 'Prietenii mei sunt: ';
console.warn(`Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.”
 in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
`);
for (var i = lengthFriends - 1; i >= 0; i--) {
  var punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }

  phrase += `${person.friends[i].name} ${person.friends[i].surname}${punctuation}`;
}
console.log(phrase);
