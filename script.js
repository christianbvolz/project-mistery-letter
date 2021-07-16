function geraCarta(value) {
  document.getElementById('envelope').removeChild(document.getElementById('carta-gerada'));
  const input = value.split(' ');
  const envelope = document.getElementById('envelope');
  const paragraph = document.createElement('p');
  paragraph.id = 'carta-gerada';
  envelope.appendChild(paragraph);
  for (const word of input) {
    const span = document.createElement('span');
    span.innerHTML = word;
    paragraph.appendChild(span);
  }
}

function validaCarta() {
  let valueInput = document.getElementById('carta-texto').value;
  let checkInput = false;
  const input = valueInput;
  if (valueInput) {
    valueInput = valueInput.split(' ').forEach(function (element, index, array) {
      if (element) {
        checkInput = true;
      }
    });
  }
  if (checkInput) {
    console.log('eeeeee');
    geraCarta(input);
  } else {
    document.getElementById('carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
    document.getElementById('carta-texto').value = '';
  }
}

document.getElementById('criar-carta').addEventListener('click', validaCarta);
document.getElementById('carta-texto').addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    validaCarta();
  }
});
