var userInput = prompt('Introdu un numar');
var referenceNumber = 20;
var message = '';
var messageElement = document.getElementById('message');
var number = Number(userInput);
// number poate fi un numar sau NaN
// isNaN(number) || userInput === null

if (userInput === null || isNaN(number) || userInput.trim().length === 0) {
  message = 'Nu ai introdus un numar';
} else {
  if (number > referenceNumber) {
    message = `Numarul este mai mare decat ${referenceNumber}`;
  } else if (number === referenceNumber) {
    message = `Numarul este egal cu ${referenceNumber}`;
  } else {
    message = `Numarul este mai mic decat ${referenceNumber}`;
  }
}

console.log(message);
messageElement.innerText = message;

// if (number % 2 === 0) {
//   // console.log('Numarul este par');
//   message = 'Numarul este par';
// } else {
//   // console.log('Numarul este impar');
//   message = 'Numarul este impar';
// }
