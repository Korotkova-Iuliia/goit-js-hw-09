const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId;

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    btnStartEl.disabled = true;
    //
  }, 1000);
  btnStartEl.removeEventListener('click', onBtnStopClick);
}

function onBtnStopClick(e) {
  clearTimeout(timerId);
  btnStartEl.disabled = !e.currentTarget.click;
  btnStopEl.removeEventListener('click', onBtnStartClick);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
