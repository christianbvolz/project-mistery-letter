function geraCarta(value) {
  document.getElementById('envelope').removeChild(document.getElementById('carta-gerada'));
  const input = value.split(' ');
  const envelope = document.getElementById('envelope');
  const paragraph = document.createElement('p');
  const contador = document.getElementById('carta-contador');
  contador.innerHTML = input.length;
  paragraph.id = 'carta-gerada';
  envelope.appendChild(paragraph);
  for (const word of input) {
    const span = document.createElement('span');
    span.innerHTML = word;
    paragraph.appendChild(span);
  }
}

const group1 = ['magazine2', 'magazine1', 'newspaper'];
const group2 = ['reallybig', 'big', 'medium'];
const group3 = ['rotateright', 'rotateleft'];
const group4 = ['skewright', 'skewleft'];

function generateStyle() {
  let result = '';
  let arraygroup = [group1, group2, group3, group4];
  for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i += 1) {
    const randomGroup = Math.floor(Math.random() * arraygroup.length);
    result += arraygroup[randomGroup][Math.floor(Math.random() * arraygroup[randomGroup].length)] + ' ';
    arraygroup.splice(randomGroup, 1);
  };
  result = result.slice(0, -1);
  result = result.split(' ');
  result = result.join(' ');
  return result;
}

function setStyle() {
  const envelope = document.querySelectorAll('#carta-gerada span');
  envelope.forEach(function (element, index, array) {
    element.className = generateStyle();
  })
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
    geraCarta(input);
  } else {
    document.getElementById('carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
    document.getElementById('carta-texto').value = '';
  }
}

document.getElementById('criar-carta').addEventListener('click', validaCarta);
document.getElementById('criar-carta').addEventListener('click', setStyle);
document.getElementById('carta-texto').addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    validaCarta();
    setStyle();
  }
});
