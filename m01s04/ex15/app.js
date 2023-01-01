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

console.warn(`Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested)
afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri. Exemplu:
Intre Larry si Steven este o diferenta de x ani.

`);
var message = '';
var friends = person.friends;
for (var i = 0; i < friends.length; i++) {
  for (var j = 0; j < friends.length; j++) {
    if (i === j) {
      continue;
    }
    message = `Intre ${friends[i].name} si ${
      friends[j].name
    } este o diferenta de ${Math.abs(friends[i].age - friends[j].age)} ani.`;
    console.log(message);
  }
}
