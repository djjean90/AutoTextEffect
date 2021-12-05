const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const text = 'We Love Programming!';

let inx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, inx);

  inx++;

  if (inx > text.length) {
    inx = 1;
  }
  console.log(speed);
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});
