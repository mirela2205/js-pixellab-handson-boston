const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');
const age = document.getElementById('query');
const paragraphElement = document.getElementById('message');

function clickHandler() {
  alert('Ai apasat butonlu!');
}

// Folosind codul de la exercitiul 08,
// numeste functia care ruleaza la click clickHandler
// si foloseste-i numele ca parametru al metodei
// addEventListener in locul celei anonime.
button.addEventListener('click', clickHandler);

// La click pe acest buton nou, foloseste
// metoda removeEventListener al variabilei button
// si foloseste numele clickHandler ca parametru.
removeEventButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

age.addEventListener('click', function () {
  const ageInput = prompt('Ce varsta ai?');
  let message = '';
  message = `Ai ${ageInput} ani.`;
  console.log(message);
  paragraphElement.innerText = message;
});
