var number = prompt('Introdu un numar');
var message = '';
var messageElement = document.getElementById('message');

if (number % 2 === 0) {
  // console.log('Numarul este par');
  message - 'Numarul este par';
} else {
  // console.log('Numarul este impar');
  message - 'Numarul este impar';
}

console.log(message);
messageElement.innerText = message;
