const btnStartEl = document.querySelector('button[data-start]');
// window.addEventListener('keydown', onBtnStartClick);
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

btnStartEl.addEventListener('click', onBtnStartClick);
clickBtnStart.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    btnStartEl.disabled = true;
  }, 1000);
}
function onBtnStopClick {

};
// btnStartEl.removeEventListener(onBtnStartClick);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
