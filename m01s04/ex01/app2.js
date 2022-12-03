var userInput = prompt('Care este numele tau?');
var m1 = document.getElementById('mess01');
var m2 = document.getElementById('mess02');
var m3 = document.getElementById('mess03');
var message = '';
var message2 = '';
var message3 = '';

if (userInput === null || userInput.trim().length === 0) {
  message = 'Nu ai introdus un nume';
} else {
  message = `Numele meu este: ${userInput}.`;
  message2 = `Numele introdus are ${
    userInput.replaceAll(' ', '').length
  } caractere`;

  if (userInput.toLowerCase().includes('a')) {
    message3 = 'Numele introdus contine a';
  } else {
    message3 = 'Numele introdus nu contine a';
  }
}

console.log(message);
console.log(message2);
console.log(message3);
m1.innerText = message;
m2.innerText = message2;
m3.innerText = message3;
