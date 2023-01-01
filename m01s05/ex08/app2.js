const button = document.getElementById('clicker');
const removeEvent = document.getElementById('removeEvent');

function clickHandler() {
  alert('m-ai apasat');
}

button.addEventListener('click', clickHandler);
removeEvent.addEventListener('mouseover', function () {
  button.removeEventListener('click', clickHandler);
});
