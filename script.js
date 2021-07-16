function geraCarta() {
  document.getElementById('envelope').removeChild(document.getElementById('carta-gerada'));
  const input = document.getElementById('carta-texto').value.split(' ');
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


document.getElementById('criar-carta').addEventListener('click', geraCarta);

document.getElementById('carta-texto').addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    geraCarta();
  }
});
