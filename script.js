function geraCarta(value) {
  const input = value.split(' ');
  const envelope = document.getElementById('envelope');
  const paragraph = document.createElement('p');
  const contador = document.getElementById('carta-contador');
  envelope.removeChild(document.getElementById('carta-gerada'));
  contador.innerHTML = input.length;
  paragraph.id = 'carta-gerada';
  envelope.appendChild(paragraph);
  for (let index = 0; index < input.length; index += 1) {
    const span = document.createElement('span');
    span.innerHTML = input[index];
    paragraph.appendChild(span);
  }
}

const group1 = ['magazine2', 'magazine1', 'newspaper'];
const group2 = ['reallybig', 'big', 'medium'];
const group3 = ['rotateright', 'rotateleft'];
const group4 = ['skewright', 'skewleft'];

function generateStyle() {
  let result = '';
  const arraygroup = [group1, group2, group3, group4];
  for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i += 1) {
    const randomGroup = Math.floor(Math.random() * arraygroup.length);
    const group = arraygroup[randomGroup];
    result += `${group[Math.floor(Math.random() * group.length)]} `;
    arraygroup.splice(randomGroup, 1);
  }
  result = result.slice(0, -1);
  result = result.split(' ');
  result = result.join(' ');
  return result;
}

function setStyle() {
  const envelope = document.querySelectorAll('#carta-gerada span');
  envelope.forEach((element) => {
    const style = element;
    style.className = generateStyle();
  });
}

function validaCarta() {
  let valueInput = document.getElementById('carta-texto').value;
  let checkInput = false;
  const input = valueInput;
  if (valueInput) {
    valueInput = valueInput.split(' ').forEach((element) => {
      if (element) {
        checkInput = true;
      }
    });
  }
  if (checkInput) {
    geraCarta(input);
  } else {
    document.getElementById('carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
    valueInput = '';
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
